import { useState } from 'react'

const gateInfo = {
  H: {
    name: 'Hadamard Gate',
    symbol: 'H',
    backendGate: 'h',
    description:
      'Creates a superposition by transforming a definite qubit state into a combination of |0⟩ and |1⟩.',
    category: 'Superposition',
  },

  X: {
    name: 'Pauli-X Gate',
    symbol: 'X',
    backendGate: 'x',
    description:
      'Flips the qubit state. |0⟩ becomes |1⟩ and |1⟩ becomes |0⟩.',
    category: 'Single Qubit',
  },

  Z: {
    name: 'Pauli-Z Gate',
    symbol: 'Z',
    backendGate: 'z',
    description:
      'Applies a phase flip to the |1⟩ component of a qubit.',
    category: 'Single Qubit',
  },

  CNOT: {
    name: 'Controlled-NOT Gate',
    symbol: 'CX',
    backendGate: 'cnot',
    description:
      'A two-qubit gate that flips the target qubit when the control qubit is |1⟩.',
    category: 'Two Qubit',
  },
}

const createEmptyCircuit = (qubits = 2, columns = 5) =>
  Array.from(
    { length: qubits },
    () => Array(columns).fill(null)
  )

function Playground() {
  const [qubitCount, setQubitCount] = useState(2)

  /*
    Each cell is either:

    null
    {
      type: 'single',
      gate: 'H'
    }

    CNOT is stored separately as an operation:

    {
      type: 'cnot',
      control: 0,
      target: 1
    }

    This lets the frontend correctly communicate
    control + target to the Python simulator.
  */
  const [circuit, setCircuit] = useState(
    createEmptyCircuit()
  )

  const [cnotOperations, setCnotOperations] = useState([])

  const [selectedGate, setSelectedGate] = useState('H')

  const [cnotSelection, setCnotSelection] =
    useState(null)

  const [results, setResults] = useState(null)

  const [isRunning, setIsRunning] = useState(false)

  const [error, setError] = useState('')

  const columns = circuit[0]?.length || 5

  const selectedGateInfo = gateInfo[selectedGate]

  // --------------------------------------------------
  // QUBIT CONTROLS
  // --------------------------------------------------

  const addQubit = () => {
    if (qubitCount >= 5) {
      return
    }

    setQubitCount((previous) => previous + 1)

    setCircuit((previous) => [
      ...previous,
      Array(columns).fill(null),
    ])

    setResults(null)
    setError('')
  }

  const removeQubit = () => {
    if (qubitCount <= 1) {
      return
    }

    const removedQubit = qubitCount - 1

    setQubitCount((previous) => previous - 1)

    setCircuit((previous) =>
      previous.slice(0, -1)
    )

    setCnotOperations((previous) =>
      previous.filter(
        (operation) =>
          operation.control !== removedQubit &&
          operation.target !== removedQubit
      )
    )

    setResults(null)
    setError('')
  }

  // --------------------------------------------------
  // COLUMN CONTROLS
  // --------------------------------------------------

  const addColumn = () => {
    setCircuit((previous) =>
      previous.map((row) => [
        ...row,
        null,
      ])
    )

    setResults(null)
    setError('')
  }

  const removeColumn = () => {
    if (columns <= 3) {
      return
    }

    const removedColumn = columns - 1

    setCircuit((previous) =>
      previous.map((row) =>
        row.slice(0, -1)
      )
    )

    setCnotOperations((previous) =>
      previous.filter(
        (operation) =>
          operation.column !== removedColumn
      )
    )

    setResults(null)
    setError('')
  }

  // --------------------------------------------------
  // SINGLE-QUBIT GATES
  // --------------------------------------------------

  const placeSingleGate = (
    qubitIndex,
    columnIndex
  ) => {
    const updatedCircuit = circuit.map(
      (row) => [...row]
    )

    updatedCircuit[qubitIndex][columnIndex] = {
      type: 'single',
      gate: selectedGate,
    }

    setCircuit(updatedCircuit)

    setResults(null)
    setError('')
  }

  const removeSingleGate = (
    qubitIndex,
    columnIndex
  ) => {
    const updatedCircuit = circuit.map(
      (row) => [...row]
    )

    updatedCircuit[qubitIndex][columnIndex] =
      null

    setCircuit(updatedCircuit)

    setResults(null)
    setError('')
  }

  // --------------------------------------------------
  // CNOT
  // --------------------------------------------------

  const handleCnotCellClick = (
    qubitIndex,
    columnIndex
  ) => {
    /*
      First click = control
      Second click = target
    */

    if (!cnotSelection) {
      setCnotSelection({
        qubit: qubitIndex,
        column: columnIndex,
      })

      setError('')

      return
    }

    const control = cnotSelection.qubit
    const controlColumn =
      cnotSelection.column

    /*
      CNOT must use the same circuit column
      because both qubits participate in the
      same quantum operation.
    */

    if (controlColumn !== columnIndex) {
      setError(
        'CNOT control and target must be in the same step.'
      )

      return
    }

    if (control === qubitIndex) {
      setError(
        'Control and target must be different qubits.'
      )

      return
    }

    /*
      Check whether this column already has
      another CNOT.
    */

    const columnHasCnot =
      cnotOperations.some(
        (operation) =>
          operation.column === columnIndex
      )

    if (columnHasCnot) {
      setError(
        'This circuit step already contains a CNOT.'
      )

      setCnotSelection(null)

      return
    }

    const newCnot = {
      type: 'cnot',
      control,
      target: qubitIndex,
      column: columnIndex,
    }

    setCnotOperations((previous) => [
      ...previous,
      newCnot,
    ])

    setCnotSelection(null)

    setResults(null)
    setError('')
  }

  const removeCnot = (
    columnIndex
  ) => {
    setCnotOperations((previous) =>
      previous.filter(
        (operation) =>
          operation.column !== columnIndex
      )
    )

    setCnotSelection(null)

    setResults(null)
    setError('')
  }

  // --------------------------------------------------
  // CLEAR / RESET
  // --------------------------------------------------

  const clearCircuit = () => {
    setCircuit(
      createEmptyCircuit(
        qubitCount,
        columns
      )
    )

    setCnotOperations([])
    setCnotSelection(null)
    setResults(null)
    setError('')
  }

  const resetCircuit = () => {
    setQubitCount(2)
    setCircuit(createEmptyCircuit())
    setCnotOperations([])
    setSelectedGate('H')
    setCnotSelection(null)
    setResults(null)
    setError('')
  }

  // --------------------------------------------------
  // CONVERT FRONTEND CIRCUIT → BACKEND CIRCUIT
  // --------------------------------------------------

  const buildBackendGates = () => {
    const gates = []

    /*
      Important:
      Quantum circuits execute from left → right.

      Therefore we loop through columns first,
      then qubits inside each column.
    */

    for (
      let columnIndex = 0;
      columnIndex < columns;
      columnIndex++
    ) {
      // --------------------------------------------
      // Single-qubit gates
      // --------------------------------------------

      for (
        let qubitIndex = 0;
        qubitIndex < qubitCount;
        qubitIndex++
      ) {
        const cell =
          circuit[qubitIndex]?.[columnIndex]

        if (
          cell?.type === 'single'
        ) {
          const info =
            gateInfo[cell.gate]

          if (!info?.backendGate) {
            continue
          }

          gates.push({
            gate: info.backendGate,
            qubit: qubitIndex,
          })
        }
      }

      // --------------------------------------------
      // CNOT
      // --------------------------------------------

      const cnot =
        cnotOperations.find(
          (operation) =>
            operation.column === columnIndex
        )

      if (cnot) {
        gates.push({
          gate: 'cnot',
          control: cnot.control,
          target: cnot.target,
        })
      }
    }

    return gates
  }

  // --------------------------------------------------
  // RUN REAL QUANTUM SIMULATION
  // --------------------------------------------------

  const runCircuit = async () => {
    setError('')
    setResults(null)

    const gates = buildBackendGates()

    if (gates.length === 0) {
      setError(
        'Add at least one quantum gate before running the circuit.'
      )

      return
    }

    setIsRunning(true)

    try {
      const response = await fetch(
        'http://localhost:8000/simulate',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            num_qubits: qubitCount,

            shots: 1000,

            gates,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data?.detail ||
          data?.message ||
          'Simulation failed.'
        )
      }

      if (!data.success) {
        throw new Error(
          data.message ||
          'Simulation failed.'
        )
      }

      /*
        FastAPI returns:

        {
          success: true,
          message: "...",
          result: {
            final_state_ket,
            probabilities,
            counts,
            step_by_step
          }
        }
      */

      setResults(data.result)
    } catch (simulationError) {
      console.error(
        'Quantum simulation error:',
        simulationError
      )

      setError(
        simulationError.message ||
        'Could not connect to the quantum simulator.'
      )
    } finally {
      setIsRunning(false)
    }
  }

  // --------------------------------------------------
  // CIRCUIT CELL DISPLAY
  // --------------------------------------------------

  const getCnotForCell = (
    qubitIndex,
    columnIndex
  ) => {
    return cnotOperations.find(
      (operation) =>
        operation.column === columnIndex &&
        (
          operation.control === qubitIndex ||
          operation.target === qubitIndex
        )
    )
  }

  const renderCellContent = (
    cell,
    qubitIndex,
    columnIndex
  ) => {
    const cnot =
      getCnotForCell(
        qubitIndex,
        columnIndex
      )

    if (cnot) {
      if (
        cnot.control === qubitIndex
      ) {
        return (
          <span className="cnot-control">
            ●
          </span>
        )
      }

      return (
        <span className="cnot-target">
          ⊕
        </span>
      )
    }

    if (cnotSelection) {
      if (
        cnotSelection.qubit ===
          qubitIndex &&
        cnotSelection.column ===
          columnIndex
      ) {
        return (
          <span className="cnot-selection">
            C
          </span>
        )
      }
    }

    if (cell?.type === 'single') {
      return (
        <span className="circuit-gate">
          {gateInfo[cell.gate].symbol}
        </span>
      )
    }

    return (
      <span className="cell-placeholder">
        +
      </span>
    )
  }

  // --------------------------------------------------
  // JSX
  // --------------------------------------------------

  return (
    <div className="playground-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="playground-header">

        <div>
          <p className="section-label">
            QUANTUM PLAYGROUND
          </p>

          <h1>
            Build. Experiment. Understand.
          </h1>

          <p className="playground-subtitle">
            Build quantum circuits visually and
            learn what each operation does.
          </p>
        </div>

        <div className="playground-actions">

          <button
            className="secondary-button"
            onClick={resetCircuit}
            disabled={isRunning}
          >
            ↻ Reset
          </button>

          <button
            className="run-circuit-button"
            onClick={runCircuit}
            disabled={isRunning}
          >
            {isRunning
              ? '⏳ Simulating...'
              : '▶ Run Circuit'}
          </button>

        </div>

      </div>

      {/* =========================================
          MAIN LAYOUT
      ========================================= */}

      <div className="playground-layout">

        {/* =======================================
            LEARNING PANEL
        ======================================= */}

        <aside className="learning-panel">

          <div className="panel-heading">

            <span className="panel-icon">
              ◈
            </span>

            <div>
              <h2>
                Learn
              </h2>

              <p>
                Quantum concepts
              </p>
            </div>

          </div>

          <div className="learning-topics">

            <button
              className="learning-topic active"
              type="button"
            >
              <span>
                ◉
              </span>

              <div>
                <strong>
                  Qubits
                </strong>

                <small>
                  Quantum information
                </small>
              </div>

            </button>

            <button
              className="learning-topic"
              type="button"
            >
              <span>
                H
              </span>

              <div>
                <strong>
                  Superposition
                </strong>

                <small>
                  Multiple states
                </small>
              </div>

            </button>

            <button
              className="learning-topic"
              type="button"
            >
              <span>
                ◇
              </span>

              <div>
                <strong>
                  Quantum Gates
                </strong>

                <small>
                  Transform states
                </small>
              </div>

            </button>

            <button
              className="learning-topic"
              type="button"
            >
              <span>
                ∞
              </span>

              <div>
                <strong>
                  Entanglement
                </strong>

                <small>
                  Correlated qubits
                </small>
              </div>

            </button>

          </div>

          <div className="learning-divider" />

          <div className="gate-explanation">

            <p className="mini-label">
              SELECTED GATE
            </p>

            <div className="selected-gate-display">
              {selectedGateInfo.symbol}
            </div>

            <h3>
              {selectedGateInfo.name}
            </h3>

            <span className="gate-category">
              {selectedGateInfo.category}
            </span>

            <p>
              {selectedGateInfo.description}
            </p>

            {selectedGate === 'CNOT' && (
              <p style={{ marginTop: '12px' }}>
                Select CNOT, then click one qubit
                as the control and another qubit
                as the target in the same circuit
                step.
              </p>
            )}

          </div>

        </aside>

        {/* =======================================
            CIRCUIT BUILDER
        ======================================= */}

        <main className="circuit-builder">

          <div className="builder-header">

            <div>
              <p className="mini-label">
                CIRCUIT BUILDER
              </p>

              <h2>
                Quantum Circuit
              </h2>
            </div>

            <div className="circuit-info">
              {qubitCount} Qubits
            </div>

          </div>

          {/* =====================================
              GATE PALETTE
          ===================================== */}

          <div className="gate-palette">

            <div className="palette-title">
              GATES
            </div>

            {Object.keys(gateInfo).map(
              (gate) => (
                <button
                  key={gate}
                  type="button"
                  className={
                    selectedGate === gate
                      ? 'gate-button selected'
                      : 'gate-button'
                  }
                  onClick={() => {
                    setSelectedGate(gate)
                    setCnotSelection(null)
                    setError('')
                  }}
                >
                  <span>
                    {gateInfo[gate].symbol}
                  </span>

                  <small>
                    {gateInfo[gate].name}
                  </small>
                </button>
              )
            )}

          </div>

          {/* =====================================
              CNOT INSTRUCTION
          ===================================== */}

          {selectedGate === 'CNOT' && (
            <div className="builder-tip">

              <span>
                🔗
              </span>

              <p>
                <strong>
                  CNOT mode:
                </strong>{' '}
                click the control qubit first,
                then click the target qubit in the
                same column.
              </p>

            </div>
          )}

          {/* =====================================
              ERROR
          ===================================== */}

          {error && (
            <div
              className="builder-tip"
              style={{
                borderColor:
                  'rgba(255, 90, 110, 0.3)',
                background:
                  'rgba(255, 90, 110, 0.05)',
              }}
            >
              <span>
                ⚠
              </span>

              <p
                style={{
                  color: '#ff8a96',
                }}
              >
                {error}
              </p>
            </div>
          )}

          {/* =====================================
              CIRCUIT
          ===================================== */}

          <div className="circuit-container">

            <div
              className="circuit-grid"
              style={{
                minWidth:
                  `${Math.max(
                    650,
                    columns * 100 + 80
                  )}px`,
              }}
            >

              {circuit.map(
                (row, qubitIndex) => (

                  <div
                    className="qubit-row"
                    key={qubitIndex}
                  >

                    <div className="qubit-label">
                      q{qubitIndex}
                    </div>

                    <div
                      className="wire-area"
                      style={{
                        gridTemplateColumns:
                          `repeat(${columns}, minmax(75px, 1fr))`,
                      }}
                    >

                      <div className="qubit-wire" />

                      {row.map(
                        (cell, columnIndex) => {

                          const cnot =
                            getCnotForCell(
                              qubitIndex,
                              columnIndex
                            )

                          const hasCnot =
                            Boolean(cnot)

                          return (
                            <button
                              key={columnIndex}
                              type="button"
                              className={
                                cell ||
                                hasCnot
                                  ? 'circuit-cell occupied'
                                  : 'circuit-cell'
                              }
                              onClick={() => {

                                // ------------------
                                // CNOT MODE
                                // ------------------

                                if (
                                  selectedGate ===
                                  'CNOT'
                                ) {

                                  /*
                                    Clicking an existing
                                    CNOT removes it.
                                  */

                                  if (
                                    hasCnot
                                  ) {
                                    removeCnot(
                                      columnIndex
                                    )

                                    return
                                  }

                                  handleCnotCellClick(
                                    qubitIndex,
                                    columnIndex
                                  )

                                  return
                                }

                                // ------------------
                                // SINGLE GATE MODE
                                // ------------------

                                if (cell) {
                                  removeSingleGate(
                                    qubitIndex,
                                    columnIndex
                                  )

                                  return
                                }

                                placeSingleGate(
                                  qubitIndex,
                                  columnIndex
                                )
                              }}
                            >

                              {renderCellContent(
                                cell,
                                qubitIndex,
                                columnIndex
                              )}

                            </button>
                          )
                        }
                      )}

                      {/* =================================
                          CNOT CONNECTION LINES
                      ================================= */}

                      {cnotOperations.map(
                        (operation) => {

                          const distance =
                            Math.abs(
                              operation.target -
                                operation.control
                            )

                          const topOffset =
                            Math.min(
                              operation.control,
                              operation.target
                            ) * 76 + 38

                          return (
                            <div
                              key={`${operation.column}-${operation.control}-${operation.target}`}
                              style={{
                                position:
                                  'absolute',
                                zIndex: 1,
                                left: `calc(
                                  ${
                                    operation.column
                                  } * (
                                    (100% / ${columns})
                                  )
                                  + (
                                    100% / ${
                                      columns * 2
                                    }
                                  )
                                )`,
                                top:
                                  `${topOffset}px`,
                                width: '2px',
                                height:
                                  `${distance * 76}px`,
                                background:
                                  '#b77cff',
                                pointerEvents:
                                  'none',
                              }}
                            />
                          )
                        }
                      )}

                    </div>

                  </div>
                )
              )}

            </div>

            {/* ===================================
                CIRCUIT CONTROLS
            =================================== */}

            <div className="circuit-controls">

              <button
                type="button"
                onClick={addQubit}
                disabled={
                  qubitCount >= 5 ||
                  isRunning
                }
              >
                + Add Qubit
              </button>

              <button
                type="button"
                onClick={removeQubit}
                disabled={
                  qubitCount <= 1 ||
                  isRunning
                }
              >
                − Remove Qubit
              </button>

              <button
                type="button"
                onClick={addColumn}
                disabled={isRunning}
              >
                + Add Step
              </button>

              <button
                type="button"
                onClick={removeColumn}
                disabled={
                  columns <= 3 ||
                  isRunning
                }
              >
                − Remove Step
              </button>

              <button
                type="button"
                onClick={clearCircuit}
                disabled={isRunning}
                className="clear-circuit"
              >
                Clear Circuit
              </button>

            </div>

          </div>

          <div className="builder-tip">

            <span>
              💡
            </span>

            <p>
              Select H, X or Z, then click an empty
              cell to place the gate. Click a placed
              gate to remove it. For CNOT, select
              CNOT and choose control → target.
            </p>

          </div>

        </main>

      </div>

      {/* =========================================
          RESULTS
      ========================================= */}

      {results && (
        <section className="results-section">

          <div className="results-header">

            <div>
              <p className="section-label">
                CIRCUIT OUTPUT
              </p>

              <h2>
                Measurement Results
              </h2>
            </div>

            <span className="shots-label">
              {Object.values(
                results.counts || {}
              ).reduce(
                (total, count) =>
                  total + count,
                0
              )}{' '}
              shots
            </span>

          </div>

          {/* =====================================
              FINAL STATE
          ===================================== */}

          <div
            className="builder-tip"
            style={{
              marginBottom: '25px',
            }}
          >

            <span>
              Ψ
            </span>

            <p>
              <strong>
                Final quantum state:
              </strong>{' '}
              {results.final_state_ket}
            </p>

          </div>

          {/* =====================================
              PROBABILITY BARS
          ===================================== */}

          <div className="result-bars">

            {Object.entries(
              results.counts || {}
            ).map(
              ([state, count]) => {

                const totalShots =
                  Object.values(
                    results.counts || {}
                  ).reduce(
                    (total, value) =>
                      total + value,
                    0
                  )

                const percentage =
                  totalShots > 0
                    ? (
                        count /
                        totalShots
                      ) * 100
                    : 0

                return (
                  <div
                    className="result-row"
                    key={state}
                  >

                    <div className="result-state">
                      |{state}⟩
                    </div>

                    <div className="result-bar-track">

                      <div
                        className="result-bar-fill"
                        style={{
                          width:
                            `${percentage}%`,
                        }}
                      />

                    </div>

                    <div className="result-percentage">
                      {percentage.toFixed(1)}%
                    </div>

                  </div>
                )
              }
            )}

          </div>

          {/* =====================================
              RAW COUNTS
          ===================================== */}

          <div
            className="builder-tip"
            style={{
              marginTop: '25px',
            }}
          >

            <span>
              📊
            </span>

            <p>
              <strong>
                Measurement counts:
              </strong>{' '}
              {Object.entries(
                results.counts || {}
              )
                .map(
                  ([state, count]) =>
                    `|${state}⟩: ${count}`
                )
                .join(' • ')}
            </p>

          </div>

        </section>
      )}

    </div>
  )
}

export default Playground