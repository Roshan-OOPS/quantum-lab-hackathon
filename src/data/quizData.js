export const quizData = {
  'quantum-computing': [
    {
      question: 'What is the basic unit of information in a quantum computer?',
      options: ['Pixel', 'Byte', 'Transistor', 'Qubit'],
      answer: 3,
    },
    {
      question: 'What is a key difference between a classical bit and a qubit?',
      options: [
        'A classical bit can only be used with quantum gates',
        'A qubit cannot be measured',
        'A qubit can exist in a superposition of states',
        'A qubit always stores eight values',
      ],
      answer: 2,
    },
    {
      question: 'What does quantum superposition mean for a qubit?',
      options: [
        'It can be described as a combination of the 0 and 1 states',
        'It permanently becomes both classical 0 and classical 1',
        'It automatically creates two qubits',
        'It stops being measurable',
      ],
      answer: 0,
    },
    {
      question: 'What is the main purpose of a quantum gate in a quantum circuit?',
      options: [
        'To convert every qubit into a classical bit',
        "To replace the quantum computer's processor",
        'To physically cool every qubit to zero kelvin',
        'To manipulate the state of qubits',
      ],
      answer: 3,
    },
    {
      question: 'What generally happens when a qubit is measured in the computational basis?',
      options: [
        'A classical 0 or 1 result is obtained',
        'The measurement always produces 0',
        'The qubit produces an unlimited number of classical bits',
        'The qubit becomes permanently invisible to the computer',
      ],
      answer: 0,
    },
  ],

  'classical-bit': [
    {
      question: 'What is the basic unit of information in a classical computer?',
      options: ['Pixel', 'Qubit', 'Byte', 'Bit'],
      answer: 3,
    },
    {
      question: 'How many possible values can a classical bit have?',
      options: ['Two', 'Eight', 'One', 'Four'],
      answer: 0,
    },
    {
      question: 'Which two values are normally used to represent a classical bit?',
      options: ['1 and 2', 'A and B', '0 and 2', '0 and 1'],
      answer: 3,
    },
    {
      question: 'How many bits are contained in one byte?',
      options: ['16 bits', '4 bits', '2 bits', '8 bits'],
      answer: 3,
    },
    {
      question:
        'If you have 2 classical bits, how many different binary combinations can they represent?',
      options: ['2 combinations', '3 combinations', '4 combinations', '8 combinations'],
      answer: 2,
    },
  ],

  qubit: [
    {
      question: 'Which notation is commonly used to represent a qubit in quantum computing?',
      options: ['Ket notation', 'Pixel notation', 'Decimal notation only', 'Binary notation only'],
      answer: 0,
    },
    {
      question: 'What does the ket |0⟩ represent?',
      options: [
        'A qubit with two qubits',
        'The zero computational basis state',
        'A classical byte',
        'A measurement of both 0 and 1',
      ],
      answer: 1,
    },
    {
      question: 'Which two states form the standard computational basis for a single qubit?',
      options: ['|1⟩ and |2⟩', '|0⟩ and |1⟩', '|0⟩ and |2⟩', '|A⟩ and |B⟩'],
      answer: 1,
    },
    {
      question:
        'Which expression represents a qubit in a general superposition of |0⟩ and |1⟩?',
      options: ['α|2⟩ + β|3⟩', '|0⟩ + |2⟩', 'α|0⟩ + β|1⟩', '0 + 1 = 1'],
      answer: 2,
    },
    {
      question: 'In the state α|0⟩ + β|1⟩, what do α and β represent?',
      options: [
        'Probability amplitudes',
        'Classical computer processors',
        'Two physical qubits',
        'Measurement results only',
      ],
      answer: 1,
    },
  ],

  superposition: [
    {
      question: 'What does the superposition principle allow a qubit to do?',
      options: [
        'Become two separate qubits',
        'Store only the value 1',
        'Exist in a combination of |0⟩ and |1⟩',
        'Store only the value 0',
      ],
      answer: 2,
    },
    {
      question: 'Which expression represents a single qubit in a general superposition?',
      options: ['0 + 1 = 1', '|0⟩ + |2⟩', '|1⟩ − |2⟩', 'α|0⟩ + β|1⟩'],
      answer: 3,
    },
    {
      question:
        'Before a measurement, what can be said about a qubit in a superposition of |0⟩ and |1⟩?',
      options: [
        'It is definitely measured as 0',
        'It is definitely measured as 1',
        'Its state contains contributions from both basis states',
        'It has stopped being a quantum state',
      ],
      answer: 2,
    },
    {
      question:
        'If a qubit is in the state (|0⟩ + |1⟩)/√2, what is the probability of measuring |0⟩?',
      options: ['100%', '0%', '25%', '50%'],
      answer: 3,
    },
    {
      question:
        "What happens to a qubit's superposition when it is measured in the computational basis?",
      options: [
        'It creates a new qubit',
        'It always produces 50% for each outcome',
        'A definite classical 0 or 1 outcome is obtained',
        'It always produces both 0 and 1',
      ],
      answer: 2,
    },
  ],

  measurement: [
    {
      question:
        'What happens when a qubit in a superposition is measured in the computational basis?',
      options: [
        'It creates another qubit',
        'It produces a definite 0 or 1 outcome',
        'It removes the qubit permanently',
        'It produces both 0 and 1 at the same time',
      ],
      answer: 1,
    },
    {
      question: 'What is meant by the term "collapse" of a quantum state?',
      options: [
        'The qubit turns into a classical computer',
        'The state becomes one definite measurement outcome',
        'The qubit physically breaks apart',
        'The qubit gains more possible states',
      ],
      answer: 1,
    },
    {
      question:
        'A qubit is in the state (|0⟩ + |1⟩)/√2. What are the probabilities of measuring 0 and 1?',
      options: [
        '100% for 0 and 100% for 1',
        '0% for 0 and 100% for 1',
        '50% for 0 and 50% for 1',
        '25% for 0 and 75% for 1',
      ],
      answer: 2,
    },
    {
      question:
        'If a qubit is measured and the result is 0, what state does it have after computational-basis measurement?',
      options: ['|0⟩', '|2⟩', '|1⟩', '(|0⟩ + |1⟩)/√2'],
      answer: 1,
    },
    {
      question:
        'Why can repeated measurements of identically prepared superposition qubits give different results?',
      options: [
        'Measurement has no effect on the quantum state',
        'The computer randomly changes the qubit size',
        'Measurement outcomes are governed by quantum probabilities',
        'Every measurement always produces the same result',
      ],
      answer: 2,
    },
  ],

  'quantum-gates': [
    {
      question: 'What is the primary purpose of a quantum gate in a quantum circuit?',
      options: [
        'To permanently store classical data',
        'To convert every qubit into a classical bit',
        'To measure every qubit in the circuit',
        'To change or manipulate the state of one or more qubits',
      ],
      answer: 3,
    },
    {
      question: 'A qubit starts in |0⟩. What is the state after applying an X gate?',
      options: ['|0⟩', '(|0⟩ − |1⟩)/√2', '(|0⟩ + |1⟩)/√2', '|1⟩'],
      answer: 3,
    },
    {
      question: 'A qubit starts in |0⟩. What state results from applying an H gate?',
      options: ['(|0⟩ − |1⟩)/√2', '|1⟩', '(|0⟩ + |1⟩)/√2', '|0⟩'],
      answer: 2,
    },
    {
      question:
        'Which statement best describes the Z gate when acting on computational-basis states?',
      options: [
        'It changes the phase of |1⟩ while leaving |0⟩ unchanged',
        'It creates two new qubits',
        'It always measures the qubit as 0',
        'It swaps |0⟩ and |1⟩',
      ],
      answer: 0,
    },
    {
      question: 'Why are quantum gates often represented by matrices?',
      options: [
        'Because matrices automatically measure qubits',
        'Because matrices turn qubits into classical bits',
        'Because matrices increase the number of qubits',
        'Because matrices describe transformations of quantum states',
      ],
      answer: 3,
    },
  ],

  circuits: [
    {
      question: 'In a quantum circuit, what does a horizontal wire typically represent?',
      options: [
        'A qubit as it moves through the circuit',
        'A classical computer program',
        'A measurement result only',
        'A quantum gate',
      ],
      answer: 0,
    },
    {
      question:
        'If a quantum circuit contains two qubits, how many computational-basis states are possible?',
      options: ['4', '2', '3', '8'],
      answer: 0,
    },
    {
      question: 'Which state is a valid computational-basis state for a two-qubit system?',
      options: ['|11⟩', '|000⟩', '|2⟩', '|0⟩'],
      answer: 0,
    },
    {
      question: 'What is the main purpose of a CNOT gate in a two-qubit circuit?',
      options: [
        'To remove the control qubit',
        'To measure both qubits',
        'To flip the target qubit depending on the control qubit',
        'To create a third qubit',
      ],
      answer: 2,
    },
    {
      question:
        'A two-qubit system is prepared in the state (|00⟩ + |11⟩)/√2. What is notable about this state?',
      options: [
        'It is an entangled two-qubit state',
        'It contains only the |01⟩ state',
        'It is a single-qubit state',
        'It represents two independent classical bits',
      ],
      answer: 0,
    },
  ],

  entanglement: [
    {
      question: 'What is quantum entanglement?',
      options: [
        'Two particles becoming completely independent',
        'Two quantum particles having correlated states',
        'A particle losing its energy',
        'A particle stopping its motion',
      ],
      answer: 1,
    },
    {
      question:
        "What happens to entangled particles when one particle is measured?",
      options: [
        "The other particle's state can become correlated with that result",
        'Both particles disappear',
        'Both particles become classical bits',
        'Nothing can ever be learned about the other particle',
      ],
      answer: 0,
    },
    {
      question: 'Which particles can become quantum mechanically entangled?',
      options: [
        'Only electrons',
        'Only photons',
        'Different types of quantum systems can be entangled',
        'Only atoms',
      ],
      answer: 2,
    },
    {
      question: 'Match the following: Qubit, Quantum Gate, Measurement, Superposition.',
      options: [
        '1-A, 2-B, 3-C, 4-D',
        '1-B, 2-A, 3-D, 4-C',
        '1-C, 2-D, 3-A, 4-B',
        '1-D, 2-C, 3-B, 4-A',
      ],
      answer: 0,
    },
    {
      question: 'What is an important property of entangled particles?',
      options: [
        'Their measurement outcomes can show strong correlations',
        'They always have identical measurement results',
        'They cannot be measured',
        'They must always be in the same physical location',
      ],
      answer: 0,
    },
  ],

  'phase-interference': [
    {
      question: 'What is quantum phase?',
      options: [
        'The amount of energy in a particle',
        'A value that describes the relative position in a quantum wave',
        'The mass of a particle',
        'The speed of a particle',
      ],
      answer: 1,
    },
    {
      question: 'What happens during constructive interference?',
      options: [
        'Waves cancel each other',
        'Waves combine to produce a stronger amplitude',
        'Waves stop moving',
        'Waves lose their phase',
      ],
      answer: 1,
    },
    {
      question: 'What happens during destructive interference?',
      options: [
        'Waves combine to produce a larger amplitude',
        'Waves become entangled',
        'Waves partially or completely cancel each other',
        'Waves increase their frequency',
      ],
      answer: 2,
    },
    {
      question: 'Match the following: Phase, Constructive Interference, Destructive Interference, Wave Interference.',
      options: [
        '1-B, 2-A, 3-C, 4-D',
        '1-A, 2-C, 3-D, 4-B',
        '1-C, 2-D, 3-A, 4-B',
        '1-D, 2-B, 3-A, 4-C',
      ],
      answer: 0,
    },
    {
      question: 'Which quantum gate can change the phase of a qubit?',
      options: ['X gate', 'Z gate', 'CNOT gate', 'Measurement gate'],
      answer: 1,
    },
  ],

  'quantum-algorithms': [
    {
      question: 'What is a quantum algorithm?',
      options: [
        'An algorithm that runs only on classical computers',
        'An algorithm designed to use quantum computing principles',
        'A type of computer hardware',
        'A method for storing files',
      ],
      answer: 1,
    },
    {
      question: 'Which algorithm is commonly used for searching an unsorted database?',
      options: [
        'Shor’s Algorithm',
        'Grover’s Algorithm',
        'Euclid’s Algorithm',
        'Dijkstra’s Algorithm',
      ],
      answer: 1,
    },
    {
      question: 'What is Grover’s Algorithm mainly known for?',
      options: [
        'Factoring large numbers',
        'Searching an unsorted space more efficiently',
        'Sending encrypted messages',
        'Measuring qubits',
      ],
      answer: 1,
    },
    {
      question: 'What is Shor’s Algorithm famous for?',
      options: [
        'Factoring large integers efficiently on a quantum computer',
        'Sorting classical data',
        'Creating animations',
        'Measuring quantum phase',
      ],
      answer: 0,
    },
    {
      question: 'Match the following: Grover’s Algorithm, Shor’s Algorithm, Quantum Algorithm, Quantum Circuit.',
      options: [
        '1-B, 2-C, 3-A, 4-D',
        '1-C, 2-B, 3-D, 4-A',
        '1-A, 2-D, 3-B, 4-C',
        '1-D, 2-A, 3-C, 4-B',
      ],
      answer: 0,
    },
  ],

  'quantum-cryptography': [
    {
      question: 'What is quantum cryptography mainly used for?',
      options: [
        'Securing communication using quantum principles',
        'Increasing computer storage',
        'Creating quantum games',
        'Improving internet speed',
      ],
      answer: 0,
    },
    {
      question: 'What does QKD stand for?',
      options: [
        'Quantum Key Distribution',
        'Quantum Knowledge Database',
        'Quantum Kernel Design',
        'Quantum Key Detection',
      ],
      answer: 0,
    },
    {
      question: 'Match the following: QKD, Secret Key, Eavesdropping, Quantum Cryptography.',
      options: [
        '1-B, 2-C, 3-A, 4-D',
        '1-C, 2-A, 3-D, 4-B',
        '1-D, 2-B, 3-C, 4-A',
        '1-A, 2-D, 3-B, 4-C',
      ],
      answer: 0,
    },
    {
      question:
        'What can happen if an eavesdropper tries to intercept quantum information in a QKD system?',
      options: [
        'The quantum states can be disturbed, revealing the presence of interference',
        'The communication becomes automatically faster',
        'The key becomes longer',
        'Nothing can be detected',
      ],
      answer: 0,
    },
    {
      question:
        'Which principle of quantum mechanics is important for detecting eavesdropping in QKD?',
      options: [
        'Quantum states cannot be copied perfectly',
        'Particles always move at the same speed',
        'Energy is always zero',
        'All qubits have identical states',
      ],
      answer: 0,
    },
  ],

  'quantum-machine-learning': [
    {
      question: 'What is Quantum Machine Learning?',
      options: [
        'Combining quantum computing with machine learning',
        'Using only classical computers for learning',
        'Building physical robots',
        'Encrypting all machine-learning data',
      ],
      answer: 0,
    },
    {
      question: 'Match the following: QML, Qubit, Quantum Circuit, Machine Learning.',
      options: [
        '1-B, 2-A, 3-C, 4-D',
        '1-A, 2-C, 3-D, 4-B',
        '1-C, 2-D, 3-B, 4-A',
        '1-D, 2-B, 3-A, 4-C',
      ],
      answer: 0,
    },
    {
      question: 'How can quantum computing be used in machine learning?',
      options: [
        'By using quantum circuits as part of learning algorithms',
        'By removing all training data',
        'By replacing every computer with a quantum computer',
        'By preventing models from making predictions',
      ],
      answer: 0,
    },
    {
      question: 'What is a quantum circuit in QML?',
      options: [
        'A sequence of quantum gates that processes quantum information',
        'A classical electrical circuit',
        'A database of training examples',
        'A network cable',
      ],
      answer: 0,
    },
    {
      question: 'What is one potential benefit of QML?',
      options: [
        'Quantum methods may provide advantages for certain machine-learning tasks',
        'Every machine-learning problem becomes faster',
        'Training data is no longer needed',
        'Classical machine learning becomes impossible',
      ],
      answer: 0,
    },
  ],

  'real-world-applications': [
    {
      question: 'Which field is being explored as a potential application of quantum computing?',
      options: [
        'Drug discovery',
        'Keyboard design',
        'Web page formatting',
        'File compression',
      ],
      answer: 0,
    },
    {
      question: 'How can quantum computing potentially help in drug discovery?',
      options: [
        'By simulating molecular and chemical systems',
        'By increasing internet speed',
        'By replacing laboratory equipment',
        'By creating larger databases',
      ],
      answer: 0,
    },
    {
      question: 'Which area can use quantum technologies for highly precise measurements?',
      options: [
        'Sensing and navigation',
        'Social media',
        'Word processing',
        'Video streaming',
      ],
      answer: 0,
    },
    {
      question: 'How might quantum computing help with optimization problems?',
      options: [
        'By exploring solutions to certain complex optimization problems',
        'By eliminating the need for data',
        'By making every problem instantly solvable',
        'By increasing screen resolution',
      ],
      answer: 0,
    },
    {
      question: 'Match the following: Drug Discovery, Financial Optimization, Quantum Sensing, Logistics.',
      options: [
        '1-B, 2-A, 3-C, 4-D',
        '1-A, 2-C, 3-D, 4-B',
        '1-D, 2-B, 3-A, 4-C',
        '1-C, 2-D, 3-B, 4-A',
      ],
      answer: 0,
    },
  ],
}