"""
test_quantum_engine.py
Unit tests for quantum_engine.py — run with: python -m pytest test_quantum_engine.py
or plain: python test_quantum_engine.py
"""

import unittest
import numpy as np
from quantum_engine import (
    simulate, get_probabilities, QuantumCircuit,
    preset_superposition, preset_bit_flip, preset_entanglement
)


class TestQuantumEngine(unittest.TestCase):

    def test_initial_state_is_zero(self):
        circuit = QuantumCircuit(1)
        state = circuit.run()
        self.assertAlmostEqual(abs(state[0]), 1.0, places=5)
        self.assertAlmostEqual(abs(state[1]), 0.0, places=5)

    def test_x_gate_flips_bit(self):
        circuit = QuantumCircuit(1)
        circuit.add_gate("x", qubit=0)
        state = circuit.run()
        self.assertAlmostEqual(abs(state[0]), 0.0, places=5)
        self.assertAlmostEqual(abs(state[1]), 1.0, places=5)

    def test_h_gate_creates_50_50_superposition(self):
        preset = preset_superposition()
        result = simulate(preset["gates"], preset["num_qubits"], shots=2000, seed=1)
        probs = result["probabilities"]
        self.assertAlmostEqual(probs["0"], 0.5, delta=0.01)
        self.assertAlmostEqual(probs["1"], 0.5, delta=0.01)

    def test_double_h_returns_to_original_state(self):
        # H applied twice should cancel out (interference) -> back to |0>
        circuit = QuantumCircuit(1)
        circuit.add_gate("h", qubit=0)
        circuit.add_gate("h", qubit=0)
        state = circuit.run()
        self.assertAlmostEqual(abs(state[0]), 1.0, places=5)
        self.assertAlmostEqual(abs(state[1]), 0.0, places=5)

    def test_entanglement_only_produces_matching_outcomes(self):
        preset = preset_entanglement()
        result = simulate(preset["gates"], preset["num_qubits"], shots=2000, seed=1)
        counts = result["counts"]
        # Only "00" and "11" should ever appear, never "01" or "10"
        for outcome in counts:
            self.assertIn(outcome, ["00", "11"])

    def test_probabilities_sum_to_one(self):
        preset = preset_entanglement()
        circuit = QuantumCircuit(preset["num_qubits"])
        for g in preset["gates"]:
            params = {k: v for k, v in g.items() if k != "gate"}
            circuit.add_gate(g["gate"], **params)
        state = circuit.run()
        probs = get_probabilities(state)
        self.assertAlmostEqual(sum(probs.values()), 1.0, places=5)

    def test_invalid_gate_raises_error(self):
        circuit = QuantumCircuit(1)
        with self.assertRaises(ValueError):
            circuit.add_gate("not_a_real_gate", qubit=0)

    def test_invalid_qubit_index_raises_error(self):
        circuit = QuantumCircuit(1)
        with self.assertRaises(ValueError):
            circuit.add_gate("h", qubit=5)  # out of range

    def test_cnot_same_control_target_raises_error(self):
        circuit = QuantumCircuit(2)
        with self.assertRaises(ValueError):
            circuit.add_gate("cnot", control=0, target=0)

    def test_step_by_step_history_recorded(self):
        circuit = QuantumCircuit(1)
        circuit.add_gate("h", qubit=0)
        circuit.run()
        self.assertEqual(len(circuit.history), 2)  # initial + 1 gate
        self.assertEqual(circuit.history[0]["gate"], "initial")
        self.assertEqual(circuit.history[1]["gate"], "h")


if __name__ == "__main__":
    unittest.main()