"""
quantum_engine.py
A from-scratch quantum circuit simulator built with NumPy and complex numbers.
No external quantum libraries (no Qiskit) — every gate and operation is
implemented manually so the math is fully transparent and teachable.

This module has ZERO web/API dependencies. It is meant to be imported later:
    from quantum_engine import simulate
"""

import numpy as np

# =========================================================
# 3 & 4 & 5: STATE VECTOR / COMPLEX NUMBERS / NUMPY
# =========================================================
# A quantum state of n qubits is represented as a complex NumPy vector
# of length 2^n. Index i corresponds to computational basis state |i⟩
# (binary representation, qubit 0 = leftmost/most significant bit).

def initial_state(num_qubits: int) -> np.ndarray:
    """Returns the |00...0⟩ starting state as a complex vector."""
    dim = 2 ** num_qubits
    state = np.zeros(dim, dtype=complex)
    state[0] = 1.0 + 0j
    return state


# =========================================================
# 6, 7, 8, 9: QUANTUM GATE MATRICES (X, H, Z)
# =========================================================
# Each is a 2x2 unitary matrix acting on a single qubit.

I_GATE = np.array([[1, 0],
                    [0, 1]], dtype=complex)

X_GATE = np.array([[0, 1],
                    [1, 0]], dtype=complex)  # bit flip

Z_GATE = np.array([[1, 0],
                    [0, -1]], dtype=complex)  # phase flip

H_GATE = (1 / np.sqrt(2)) * np.array([[1, 1],
                                       [1, -1]], dtype=complex)  # superposition


# =========================================================
# 10: CNOT GATE (2-qubit gate)
# =========================================================
# Implemented directly on the state vector (not as a full matrix), so it
# works correctly for ANY control/target pair in an N-qubit system.

def apply_cnot(state: np.ndarray, control: int, target: int, num_qubits: int) -> np.ndarray:
    """
    Applies CNOT: if control qubit is |1>, flip the target qubit.
    Works for any number of qubits and any control/target positions.
    """
    dim = 2 ** num_qubits
    new_state = np.zeros_like(state)

    for i in range(dim):
        bits = list(format(i, f"0{num_qubits}b"))
        if bits[control] == "1":
            bits[target] = "0" if bits[target] == "1" else "1"
            j = int("".join(bits), 2)
            new_state[j] += state[i]
        else:
            new_state[i] += state[i]

    return new_state


# =========================================================
# 11, 12, 13: APPLYING GATES / MULTI-QUBIT STATES / TENSOR PRODUCTS
# =========================================================
# To apply a single-qubit gate to one qubit within a larger N-qubit system,
# we build the full 2^n x 2^n operator using the Kronecker (tensor) product,
# placing the gate at the target position and Identity everywhere else.

def apply_single_qubit_gate(state: np.ndarray, gate_matrix: np.ndarray,
                              qubit_index: int, num_qubits: int) -> np.ndarray:
    """Applies a single-qubit gate matrix to a specific qubit in an N-qubit state."""
    operators = []
    for i in range(num_qubits):
        operators.append(gate_matrix if i == qubit_index else I_GATE)

    full_operator = operators[0]
    for op in operators[1:]:
        full_operator = np.kron(full_operator, op)  # tensor product

    return full_operator @ state


GATE_MATRICES = {
    "h": H_GATE,
    "x": X_GATE,
    "z": Z_GATE,
}


# =========================================================
# 1, 2: CIRCUIT REPRESENTATION / QUBIT-STATE REPRESENTATION
# =========================================================

class QuantumCircuit:
    """Represents a sequence of gates applied to a fixed number of qubits."""

    def __init__(self, num_qubits: int):
        if num_qubits < 1:
            raise ValueError("Circuit must have at least 1 qubit.")
        self.num_qubits = num_qubits
        self.gates: list[dict] = []
        self.state = initial_state(num_qubits)
        self.history: list[dict] = []

    # ---- 15: CIRCUIT VALIDATION ----
    def _validate_gate(self, gate_name: str, params: dict):
        single_qubit_gates = {"h", "x", "z"}

        if gate_name in single_qubit_gates:
            qubit = params.get("qubit")
            if qubit is None:
                raise ValueError(f"Gate '{gate_name}' requires a 'qubit' parameter.")
            if not (0 <= qubit < self.num_qubits):
                raise ValueError(f"Qubit index {qubit} out of range for a {self.num_qubits}-qubit circuit.")

        elif gate_name == "cnot":
            control = params.get("control")
            target = params.get("target")
            if control is None or target is None:
                raise ValueError("CNOT requires 'control' and 'target' parameters.")
            if control == target:
                raise ValueError("CNOT control and target must be different qubits.")
            if not (0 <= control < self.num_qubits) or not (0 <= target < self.num_qubits):
                raise ValueError(f"Control/target out of range for a {self.num_qubits}-qubit circuit.")

        else:
            raise ValueError(f"Unsupported gate: '{gate_name}'. Supported: h, x, z, cnot.")

    def add_gate(self, gate_name: str, **params):
        gate_name = gate_name.lower()
        self._validate_gate(gate_name, params)
        self.gates.append({"gate": gate_name, "params": params})

    # ---- 14: CIRCUIT EXECUTION ----
    # ---- 21: EDUCATIONAL STEP-BY-STEP STATE INFORMATION ----
    def run(self) -> np.ndarray:
        """
        Executes the circuit gate by gate, recording the state after
        every single gate for step-by-step teaching purposes.
        """
        self.state = initial_state(self.num_qubits)
        self.history = [{
            "step": 0,
            "gate": "initial",
            "params": {},
            "state_ket": format_state_ket(self.state)
        }]

        for step, gate_entry in enumerate(self.gates, start=1):
            gate_name = gate_entry["gate"]
            params = gate_entry["params"]

            if gate_name in GATE_MATRICES:
                self.state = apply_single_qubit_gate(
                    self.state, GATE_MATRICES[gate_name], params["qubit"], self.num_qubits
                )
            elif gate_name == "cnot":
                self.state = apply_cnot(
                    self.state, params["control"], params["target"], self.num_qubits
                )

            self.history.append({
                "step": step,
                "gate": gate_name,
                "params": params,
                "state_ket": format_state_ket(self.state)
            })

        return self.state


# =========================================================
# FORMATTING HELPER (used across measurement + step tracking)
# =========================================================

def format_state_ket(state: np.ndarray, precision: int = 3) -> str:
    """Converts a state vector into readable ket notation, e.g. '0.707|00⟩ + 0.707|11⟩'."""
    num_qubits = int(np.log2(len(state)))
    terms = []
    for i, amplitude in enumerate(state):
        if abs(amplitude) > 1e-6:
            basis = format(i, f"0{num_qubits}b")
            real, imag = amplitude.real, amplitude.imag
            amp_str = f"{real:.{precision}f}"
            if abs(imag) > 1e-6:
                amp_str += f"{'+' if imag >= 0 else ''}{imag:.{precision}f}i"
            terms.append(f"{amp_str}|{basis}⟩")
    return " + ".join(terms) if terms else "0"


# =========================================================
# 16, 17: MEASUREMENT / PROBABILITIES
# =========================================================

def get_probabilities(state: np.ndarray) -> dict:
    """Born rule: probability of each outcome = |amplitude|^2."""
    num_qubits = int(np.log2(len(state)))
    return {
        format(i, f"0{num_qubits}b"): round(float(abs(amp) ** 2), 6)
        for i, amp in enumerate(state)
    }


# =========================================================
# 18, 19: SHOTS / MEASUREMENT COUNTS
# =========================================================

def measure_shots(state: np.ndarray, shots: int = 1000, seed: int | None = None) -> dict:
    """
    Simulates repeated measurement ('shots') of the same state, matching
    how real quantum hardware/simulators report results.
    """
    if seed is not None:
        np.random.seed(seed)

    num_qubits = int(np.log2(len(state)))
    probs = np.array([abs(a) ** 2 for a in state])
    probs = probs / probs.sum()  # guard against floating point drift

    outcomes = np.random.choice(len(state), size=shots, p=probs)

    counts = {}
    for outcome in outcomes:
        key = format(outcome, f"0{num_qubits}b")
        counts[key] = counts.get(key, 0) + 1

    return counts


# =========================================================
# 20, 22: SIMULATOR RESULT GENERATION / INPUT-OUTPUT INTERFACE
# =========================================================

def simulate(gates: list[dict], num_qubits: int, shots: int = 1000, seed: int | None = None) -> dict:
    """
    THE MAIN ENTRY POINT for anyone using this engine (including the future
    FastAPI layer). Takes plain gate instructions, returns everything needed
    to display and teach the result.

    gates example:
        [{"gate": "h", "qubit": 0}, {"gate": "cnot", "control": 0, "target": 1}]
    """
    circuit = QuantumCircuit(num_qubits)
    for g in gates:
        gate_name = g["gate"]
        params = {k: v for k, v in g.items() if k != "gate"}
        circuit.add_gate(gate_name, **params)

    final_state = circuit.run()

    return {
        "final_state_ket": format_state_ket(final_state),
        "probabilities": get_probabilities(final_state),
        "counts": measure_shots(final_state, shots=shots, seed=seed),
        "step_by_step": circuit.history,
    }


# =========================================================
# PRESET CIRCUITS FOR YOUR TOPICS
# =========================================================

def preset_superposition():
    return {"gates": [{"gate": "h", "qubit": 0}], "num_qubits": 1}

def preset_bit_flip():
    return {"gates": [{"gate": "x", "qubit": 0}], "num_qubits": 1}

def preset_interference():
    return {"gates": [{"gate": "h", "qubit": 0}, {"gate": "h", "qubit": 0}], "num_qubits": 1}

def preset_entanglement():
    return {"gates": [{"gate": "h", "qubit": 0}, {"gate": "cnot", "control": 0, "target": 1}],
            "num_qubits": 2}


if __name__ == "__main__":
    for name, preset in [
        ("Superposition", preset_superposition()),
        ("Bit Flip", preset_bit_flip()),
        ("Interference", preset_interference()),
        ("Entanglement", preset_entanglement()),
    ]:
        print(f"\n--- {name} ---")
        result = simulate(preset["gates"], preset["num_qubits"], shots=1000, seed=42)
        print("Final state:", result["final_state_ket"])
        print("Probabilities:", result["probabilities"])
        print("Counts:", result["counts"])