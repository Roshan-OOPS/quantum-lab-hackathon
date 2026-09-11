export const theoryData = {
  /* =========================================================
     BEGINNER
     ========================================================= */

  'quantum-computing': {
    intro:
      'Quantum computing is a new approach to computation that uses principles of quantum mechanics to process information.',

    sections: [
      {
        title: 'What is Quantum Computing?',
        content: [
          'Quantum computing is a type of computing that uses quantum mechanical principles to represent and process information.',
          'Classical computers use bits as their basic unit of information. A bit can have a value of 0 or 1. Quantum computers use quantum bits, called qubits.',
          'Qubits can be manipulated using quantum operations such as quantum gates. These operations allow quantum computers to perform calculations using quantum states.'
        ]
      },

      {
        title: 'Classical Computing vs Quantum Computing',
        content: [
          'A classical computer processes information using bits, logic gates and conventional electronic hardware.',
          'A quantum computer processes information using qubits, quantum gates, superposition, interference and entanglement.',
          'Quantum computers are not simply faster versions of classical computers. They are designed to solve certain types of problems using fundamentally different computational methods.'
        ],
        points: [
          'Classical computer → uses bits',
          'Quantum computer → uses qubits',
          'Classical logic → uses conventional logic gates',
          'Quantum logic → uses quantum gates',
          'Classical information → definite 0 or 1',
          'Quantum information → described by quantum states'
        ]
      },

      {
        title: 'What is a Qubit?',
        content: [
          'A qubit, or quantum bit, is the basic unit of quantum information.',
          'A classical bit is either 0 or 1. A qubit is described by a quantum state that can contain amplitudes for both |0⟩ and |1⟩.',
          'This ability is one of the foundations of quantum computing and leads to phenomena such as superposition and interference.'
        ]
      },

      {
        title: 'Superposition',
        content: [
          'Superposition is the ability of a quantum system to exist in a combination of possible states.',
          'For a single qubit, the general state can be written as |ψ⟩ = α|0⟩ + β|1⟩.',
          'The values α and β are probability amplitudes. When the qubit is measured in the computational basis, the probabilities of obtaining 0 or 1 are related to the squared magnitudes of these amplitudes.',
          'Superposition does not mean that a classical bit is simply both 0 and 1. It is a specifically quantum state that produces measurable interference effects.'
        ]
      },

      {
        title: 'Quantum Entanglement',
        content: [
          'Entanglement is a quantum phenomenon in which multiple quantum systems can become correlated in a way that cannot be described as independent states of the individual systems.',
          'Entangled states are important resources in quantum communication, quantum algorithms and quantum information processing.',
          'Measuring one part of an entangled system gives information about correlated measurement outcomes of the other part, although entanglement cannot be used to send information faster than light.'
        ]
      },

      {
        title: 'Quantum Measurement',
        content: [
          'Measurement converts information stored in a quantum state into a classical outcome.',
          'For a qubit measured in the computational basis, the result is either 0 or 1.',
          'The probability of each result depends on the quantum state before measurement.',
          'After measurement, the system is described by the state associated with the observed outcome when using the ideal projective measurement model.'
        ]
      },

      {
        title: 'Quantum Gates',
        content: [
          'Quantum gates are operations that transform quantum states.',
          'Examples include the X gate, which acts similarly to a NOT operation, and the Hadamard gate, which can create superposition.',
          'Quantum gates are usually represented mathematically using matrices and are reversible operations in the standard circuit model.'
        ]
      },

      {
        title: 'Why Quantum Computing Matters',
        content: [
          'Quantum computing is being researched because quantum algorithms can provide important advantages for particular computational problems.',
          'Potential areas include molecular simulation, materials science, optimization, cryptography and machine learning.',
          'However, modern quantum computers are still limited by noise, errors, hardware scale and the difficulty of maintaining high-quality quantum states.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Quantum computers use qubits instead of classical bits.',
          'Qubits are described by quantum states.',
          'Superposition allows quantum states to contain combinations of basis states.',
          'Entanglement creates quantum correlations between systems.',
          'Quantum gates manipulate quantum states.',
          'Measurement produces classical information.',
          'Quantum computers are designed for specific problems rather than replacing classical computers for everything.'
        ]
      }
    ]
  },

  'classical-bit': {
    intro:
      'Before understanding quantum information, it is important to understand the classical bit and how ordinary computers represent information.',

    sections: [
      {
        title: 'What is a Bit?',
        content: [
          'A bit is the smallest basic unit of information in classical digital computing.',
          'The word bit comes from binary digit. A bit can have one of two possible values: 0 or 1.',
          'Computers combine large numbers of bits to represent numbers, text, images, programs and other forms of information.'
        ]
      },

      {
        title: 'Binary Representation',
        content: [
          'Computers use the binary number system because digital electronic circuits can reliably represent two distinguishable states.',
          'A sequence such as 1011 represents a binary number.',
          'Each position in a binary number represents a power of two.'
        ],
        points: [
          '1 bit → 2 possible values',
          '2 bits → 4 possible combinations',
          '3 bits → 8 possible combinations',
          '8 bits → 256 possible combinations'
        ]
      },

      {
        title: 'Bits Inside a Computer',
        content: [
          'Modern computers use physical electronic components to represent and manipulate binary information.',
          'Transistors are important building blocks of digital electronics. Networks of transistors form logic gates and larger computational circuits.',
          'Processors perform operations by manipulating these binary states according to instructions.'
        ]
      },

      {
        title: 'Classical Logic Gates',
        content: [
          'Logic gates perform operations on classical bits.',
          'Common gates include AND, OR, NOT, XOR and NAND.',
          'By combining logic gates, engineers can build arithmetic units, memory systems and processors.'
        ],
        points: [
          'NOT → reverses a bit',
          'AND → produces 1 when both inputs are 1',
          'OR → produces 1 when at least one input is 1',
          'XOR → produces 1 when the inputs are different'
        ]
      },

      {
        title: 'Why Learn Classical Bits First?',
        content: [
          'Classical bits provide the foundation for understanding the difference between classical and quantum information.',
          'Once you understand that a classical bit has a definite binary value, it becomes easier to understand why a qubit is described differently.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'A bit is the basic unit of classical information.',
          'A bit has a value of 0 or 1.',
          'Bits are represented physically using electronic systems.',
          'Logic gates manipulate classical bits.',
          'Classical computers build complex computations from these simple operations.'
        ]
      }
    ]
  },

  'qubit': {
    intro:
      'A qubit is the fundamental unit of quantum information. Understanding its state is essential before learning quantum circuits and algorithms.',

    sections: [
      {
        title: 'What is a Qubit?',
        content: [
          'A qubit, short for quantum bit, is the quantum equivalent of a classical bit.',
          'The computational basis states of a qubit are written as |0⟩ and |1⟩.',
          'Unlike a classical bit, a qubit can be prepared in a quantum superposition of these basis states.'
        ]
      },

      {
        title: 'The Mathematical State of a Qubit',
        content: [
          'A general pure qubit state can be written as |ψ⟩ = α|0⟩ + β|1⟩.',
          'The complex numbers α and β are probability amplitudes.',
          'For a normalized state, |α|² + |β|² = 1.'
        ]
      },

      {
        title: 'Probability of Measurement',
        content: [
          'If the qubit is measured in the computational basis, the probability of obtaining 0 is |α|².',
          'The probability of obtaining 1 is |β|².',
          'Therefore, the amplitudes describe the probabilities of the possible measurement outcomes.'
        ]
      },

      {
        title: 'Bloch Sphere',
        content: [
          'The Bloch sphere is a useful geometric representation of the state of a single qubit.',
          'Every pure single-qubit state can be represented by a point on the surface of the sphere.',
          'Different quantum gates can be visualized as transformations of this point.'
        ]
      },

      {
        title: 'Qubit vs Classical Bit',
        points: [
          'Bit → 0 or 1',
          'Qubit → quantum state involving |0⟩ and |1⟩',
          'Bit operations → classical logic',
          'Qubit operations → quantum gates',
          'Bit measurement → reads a definite classical value',
          'Qubit measurement → produces a probabilistic outcome determined by its state'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'A qubit is the basic unit of quantum information.',
          'Its basis states are |0⟩ and |1⟩.',
          'A qubit can exist in superposition.',
          'Probability amplitudes determine measurement probabilities.',
          'The Bloch sphere provides a geometric picture of a single qubit.'
        ]
      }
    ]
  },

  'superposition': {
    intro:
      'Superposition is one of the central principles of quantum mechanics and is fundamental to quantum information processing.',

    sections: [
      {
        title: 'What is Superposition?',
        content: [
          'A quantum system can be described as a combination of possible basis states.',
          'For a qubit, the state can be written as |ψ⟩ = α|0⟩ + β|1⟩.',
          'The qubit does not simply behave like a classical bit that secretly contains either 0 or 1. The amplitudes and their relative phases affect future measurements and interference.'
        ]
      },

      {
        title: 'Probability Amplitudes',
        content: [
          'Quantum mechanics uses amplitudes rather than ordinary probabilities to describe quantum states.',
          'The squared magnitude of an amplitude gives a measurement probability.',
          'For a normalized qubit, |α|² + |β|² = 1.'
        ]
      },

      {
        title: 'Creating Superposition',
        content: [
          'The Hadamard gate is one of the most common ways to create an equal superposition from a computational basis state.',
          'For example, applying an H gate to |0⟩ produces the state (|0⟩ + |1⟩)/√2.',
          'Measuring this state in the computational basis gives 0 or 1 with equal probability.'
        ]
      },

      {
        title: 'Superposition vs Uncertainty',
        content: [
          'Classical uncertainty means we may not know whether a system is 0 or 1.',
          'Quantum superposition is different because the quantum state contains amplitudes and phase information that can produce interference.',
          'This difference is one of the reasons quantum computation behaves differently from classical probability.'
        ]
      },

      {
        title: 'Why Superposition Matters',
        content: [
          'Quantum algorithms manipulate superpositions and use interference to increase the probability of useful outcomes.',
          'Simply creating a superposition does not automatically provide a computational speedup. The algorithm must use quantum interference effectively.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Superposition describes combinations of quantum basis states.',
          'A qubit can be represented as α|0⟩ + β|1⟩.',
          'Amplitudes determine measurement probabilities.',
          'Phase information allows interference.',
          'Superposition alone is not the same as quantum speedup.'
        ]
      }
    ]
  },

  'measurement': {
    intro:
      'Quantum measurement explains how a quantum state produces a classical result and is one of the most important concepts in quantum computing.',

    sections: [
      {
        title: 'What is Quantum Measurement?',
        content: [
          'Measurement is a physical process that extracts classical information from a quantum system.',
          'The result depends on both the quantum state and the measurement basis.'
        ]
      },

      {
        title: 'Measurement of a Qubit',
        content: [
          'For a qubit |ψ⟩ = α|0⟩ + β|1⟩ measured in the computational basis, the result is 0 with probability |α|² and 1 with probability |β|².',
          'A single measurement gives one classical result.'
        ]
      },

      {
        title: 'State After Measurement',
        content: [
          'In the ideal projective measurement model, after observing an outcome, the quantum state is projected into the state corresponding to that outcome.',
          'This means that repeatedly measuring the same post-measurement state in the same basis gives the same result.'
        ]
      },

      {
        title: 'Measurement Basis',
        content: [
          'A quantum state can be measured in different bases.',
          'The computational basis uses |0⟩ and |1⟩, but other bases can reveal different properties of the state.',
          'Changing the basis before measurement is an important technique in quantum algorithms and quantum experiments.'
        ]
      },

      {
        title: 'Why Measurement Matters',
        content: [
          'Quantum algorithms eventually need to produce classical information that a person or classical computer can use.',
          'Therefore, measurement forms the bridge between quantum computation and classical information processing.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Measurement produces classical outcomes.',
          'Measurement probabilities depend on the quantum state.',
          'The measurement basis matters.',
          'Measurement changes the state in the ideal projective measurement model.',
          'Quantum algorithms must ultimately extract useful classical information.'
        ]
      }
    ]
  },

  /* =========================================================
     INTERMEDIATE
     ========================================================= */

  'quantum-gates': {
    intro:
      'Quantum gates are the fundamental operations used to manipulate qubits and construct quantum circuits.',

    sections: [
      {
        title: 'What are Quantum Gates?',
        content: [
          'A quantum gate is an operation that transforms the state of one or more qubits.',
          'In the standard gate-based quantum computing model, quantum gates are represented by unitary matrices.',
          'Unitary operations preserve the total probability of the quantum state.'
        ]
      },

      {
        title: 'Pauli X, Y and Z Gates',
        content: [
          'The Pauli gates are basic single-qubit operations.',
          'The X gate swaps |0⟩ and |1⟩ and is analogous to a classical NOT operation.',
          'The Y gate combines a bit flip with a phase change.',
          'The Z gate leaves |0⟩ unchanged while introducing a phase change to |1⟩.'
        ]
      },

      {
        title: 'Hadamard Gate',
        content: [
          'The Hadamard gate creates superposition from computational basis states.',
          'Applying H to |0⟩ produces (|0⟩ + |1⟩)/√2.',
          'Applying H to |1⟩ produces (|0⟩ - |1⟩)/√2.',
          'The relative minus sign is a phase difference that becomes important when interference occurs.'
        ]
      },

      {
        title: 'Phase Gates',
        content: [
          'Phase gates modify the phase of components of a quantum state.',
          'Phase changes may not immediately change computational-basis measurement probabilities, but they can strongly affect later interference.',
          'Examples include the S and T gates.'
        ]
      },

      {
        title: 'CNOT Gate',
        content: [
          'The controlled-NOT, or CNOT, is a two-qubit gate.',
          'One qubit acts as the control and another acts as the target.',
          'When the control is 1, the target is flipped. When the control is 0, the target remains unchanged.',
          'CNOT is especially important for creating entanglement.'
        ]
      },

      {
        title: 'Matrix Representation',
        content: [
          'Quantum gates can be represented mathematically using matrices.',
          'For a single qubit, a gate is represented by a 2 × 2 unitary matrix.',
          'For multiple qubits, larger matrices are used to represent operations on the combined state space.'
        ]
      },

      {
        title: 'Combining Quantum Gates',
        content: [
          'Quantum algorithms rarely use a single gate. Instead, gates are combined into circuits.',
          'The order of gates matters because quantum operations generally do not commute.',
          'By carefully selecting gate sequences, a quantum algorithm can create superposition, entanglement and interference patterns.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Quantum gates transform quantum states.',
          'Quantum gates are represented by unitary operations.',
          'X, Y and Z are fundamental single-qubit gates.',
          'Hadamard creates useful superpositions.',
          'CNOT performs a controlled operation.',
          'Gate sequences form quantum circuits.'
        ]
      }
    ]
  },

  'circuits': {
    intro:
      'Quantum circuits combine qubits, quantum gates and measurements to perform computational tasks.',

    sections: [
      {
        title: 'What is a Quantum Circuit?',
        content: [
          'A quantum circuit is a sequence of quantum operations applied to one or more qubits.',
          'Circuit diagrams provide a visual way to describe how quantum states are transformed over time.',
          'The circuit normally ends with measurements that produce classical results.'
        ]
      },

      {
        title: 'Qubit Registers',
        content: [
          'A quantum computer usually works with multiple qubits rather than a single qubit.',
          'A collection of qubits is called a quantum register.',
          'The state space grows exponentially with the number of qubits. For n qubits, the computational basis contains 2ⁿ basis states.'
        ]
      },

      {
        title: 'Multi-Qubit States',
        content: [
          'The state of multiple independent qubits can be constructed using tensor products.',
          'For example, two qubits can occupy basis states |00⟩, |01⟩, |10⟩ or |11⟩.',
          'A general two-qubit state can be a superposition of all four basis states.'
        ]
      },

      {
        title: 'Tensor Products',
        content: [
          'The tensor product is the mathematical operation used to combine quantum state spaces.',
          'If one qubit has dimension 2 and another qubit has dimension 2, the combined system has dimension 4.',
          'This mathematical growth is a major reason quantum systems become difficult to simulate classically as the number of qubits increases.'
        ]
      },

      {
        title: 'Controlled Operations',
        content: [
          'Controlled gates allow the operation applied to one qubit to depend on the state of another qubit.',
          'CNOT is the most common example.',
          'Controlled operations are essential for constructing entanglement and many quantum algorithms.'
        ]
      },

      {
        title: 'Building a Simple Circuit',
        content: [
          'A simple circuit might start with |0⟩, apply a Hadamard gate and then measure.',
          'The Hadamard gate creates a superposition and measurement converts the quantum state into a classical result.',
          'More advanced circuits combine many gates to produce useful interference patterns.'
        ]
      },

      {
        title: 'Measurement and Output',
        content: [
          'At the end of a quantum circuit, measurements produce classical bit strings.',
          'Quantum programs are usually executed many times, called shots or repetitions, to estimate the probabilities of different outcomes.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Quantum circuits describe sequences of quantum operations.',
          'Multiple qubits form a quantum register.',
          'n qubits have a 2ⁿ-dimensional state space.',
          'Tensor products combine quantum systems.',
          'Controlled gates connect qubits.',
          'Measurements produce classical results.'
        ]
      }
    ]
  },

  'entanglement': {
    intro:
      'Quantum entanglement is a uniquely quantum form of correlation between multiple systems and is an important resource in quantum information.',

    sections: [
      {
        title: 'What is Entanglement?',
        content: [
          'Two or more quantum systems are entangled when their combined state cannot be written as a simple product of independent states.',
          'The individual parts may not have complete independent descriptions even though the combined system has a well-defined quantum state.'
        ]
      },

      {
        title: 'Bell States',
        content: [
          'Bell states are maximally entangled two-qubit states.',
          'One example is (|00⟩ + |11⟩)/√2.',
          'If this state is measured in the computational basis, the results are correlated: either 00 or 11 is obtained.'
        ]
      },

      {
        title: 'Creating Entanglement',
        content: [
          'A common circuit for creating a Bell state begins with two qubits in |00⟩.',
          'A Hadamard gate is applied to the first qubit, followed by a CNOT with the first qubit as control.',
          'The resulting state is entangled.'
        ]
      },

      {
        title: 'Entanglement and Correlation',
        content: [
          'Entangled systems can exhibit correlations that cannot be explained by assigning independent classical states to each particle.',
          'These correlations are experimentally measurable and are central to tests of quantum mechanics.'
        ]
      },

      {
        title: 'Bell’s Theorem',
        content: [
          'Bell’s theorem shows that certain predictions of quantum mechanics cannot be reproduced by local hidden-variable theories satisfying Bell’s assumptions.',
          'Experiments testing Bell inequalities provide strong evidence for the non-classical correlations predicted by quantum mechanics.'
        ]
      },

      {
        title: 'Entanglement is Not Faster-Than-Light Communication',
        content: [
          'Although entangled measurements can be strongly correlated, entanglement cannot be used by itself to transmit controllable information faster than light.',
          'Communication still requires a classical communication channel.'
        ]
      },

      {
        title: 'Applications',
        content: [
          'Entanglement plays an important role in quantum teleportation, quantum networking, quantum cryptography and some quantum algorithms.',
          'It is considered one of the important resources of quantum information processing.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Entanglement is a property of a combined quantum system.',
          'Entangled states cannot be separated into independent states of their parts.',
          'Bell states are important examples.',
          'CNOT can be used to create entanglement.',
          'Entanglement produces strong quantum correlations.',
          'Entanglement does not enable faster-than-light communication.'
        ]
      }
    ]
  },

  'phase-interference': {
    intro:
      'Quantum phase and interference explain how probability amplitudes combine and are central to the power of many quantum algorithms.',

    sections: [
      {
        title: 'What is Quantum Phase?',
        content: [
          'Quantum states can contain complex amplitudes with both magnitude and phase.',
          'The phase of a state may not directly affect measurement probabilities in one basis, but relative phase can strongly affect interference.'
        ]
      },

      {
        title: 'Relative Phase',
        content: [
          'The relative phase between components of a superposition is physically important.',
          'For example, (|0⟩ + |1⟩)/√2 and (|0⟩ - |1⟩)/√2 have the same computational-basis probabilities but behave differently under later quantum operations.'
        ]
      },

      {
        title: 'Quantum Interference',
        content: [
          'Quantum amplitudes can add together or cancel each other.',
          'When amplitudes reinforce one another, constructive interference occurs.',
          'When amplitudes cancel, destructive interference occurs.'
        ]
      },

      {
        title: 'Constructive Interference',
        content: [
          'Constructive interference increases the amplitude associated with particular outcomes.',
          'Quantum algorithms can be designed so that desirable answers receive increased amplitude.'
        ]
      },

      {
        title: 'Destructive Interference',
        content: [
          'Destructive interference reduces or cancels the amplitude of unwanted outcomes.',
          'This is one of the key mechanisms used by quantum algorithms to suppress incorrect answers.'
        ]
      },

      {
        title: 'Phase Gates',
        content: [
          'Phase gates change the relative phase of components in a quantum state.',
          'S and T gates are common examples of phase operations.',
          'Although a phase change may not immediately change measurement probabilities, later gates can convert phase differences into measurable probability differences.'
        ]
      },

      {
        title: 'Why Interference Matters',
        content: [
          'Quantum algorithms use interference as a computational resource.',
          'The goal is generally not to observe every possible state simultaneously, but to manipulate amplitudes so that useful results become more likely when measurement occurs.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Quantum amplitudes contain magnitude and phase.',
          'Relative phase affects interference.',
          'Constructive interference increases amplitudes.',
          'Destructive interference decreases amplitudes.',
          'Quantum algorithms carefully engineer interference.'
        ]
      }
    ]
  },

  /* =========================================================
     ADVANCED
     ========================================================= */

  'quantum-algorithms': {
    intro:
      'Quantum algorithms use quantum states, gates, interference and measurement to solve particular computational problems in ways that can provide advantages over known classical approaches.',

    sections: [
      {
        title: 'What is a Quantum Algorithm?',
        content: [
          'A quantum algorithm is a computational procedure designed to run on a quantum computer.',
          'Quantum algorithms use operations such as superposition, entanglement and interference to transform quantum states.',
          'The algorithm is designed so that measurement produces useful information with high probability.'
        ]
      },

      {
        title: 'Quantum Advantage',
        content: [
          'Quantum advantage refers to situations where a quantum computer can perform a useful computational task more efficiently than known classical methods under appropriate assumptions.',
          'Quantum speedups are problem-dependent. Quantum computers do not provide a universal speedup for every computational task.'
        ]
      },

      {
        title: 'Quantum Oracles',
        content: [
          'An oracle is a quantum operation that encodes information about a problem into a quantum state.',
          'Oracles are particularly important in query-based algorithms such as Grover’s search algorithm.',
          'The algorithm then uses interference to extract useful information from the oracle responses.'
        ]
      },

      {
        title: 'Grover’s Search Algorithm',
        content: [
          'Grover’s algorithm searches an unstructured space of N possibilities using approximately O(√N) oracle queries, compared with O(N) queries for a straightforward classical search.',
          'The algorithm begins with a uniform superposition, uses an oracle to mark desired states and applies amplitude amplification to increase their probability.'
        ]
      },

      {
        title: 'Amplitude Amplification',
        content: [
          'Amplitude amplification increases the amplitude of desired states while decreasing the relative amplitude of unwanted states.',
          'Grover’s algorithm repeatedly applies an oracle operation and a diffusion operation to achieve this amplification.'
        ]
      },

      {
        title: 'Shor’s Algorithm',
        content: [
          'Shor’s algorithm is a quantum algorithm for integer factoring and discrete logarithms under appropriate formulations.',
          'Its important quantum component is efficient period finding.',
          'The quantum Fourier transform is used as part of the procedure for extracting information about the period.'
        ]
      },

      {
        title: 'Quantum Fourier Transform',
        content: [
          'The Quantum Fourier Transform, or QFT, is the quantum analogue of the discrete Fourier transform at the level of amplitudes.',
          'It can be implemented efficiently using a sequence of Hadamard and controlled phase gates.',
          'QFT is an important subroutine in several quantum algorithms.'
        ]
      },

      {
        title: 'Period Finding',
        content: [
          'Period finding searches for a repeating structure in a mathematical function.',
          'Quantum interference and the QFT allow information about this period to be extracted efficiently in algorithms such as Shor’s.'
        ]
      },

      {
        title: 'Complexity and Limitations',
        content: [
          'Quantum complexity theory studies which computational problems can be solved efficiently using quantum resources.',
          'Real quantum computers introduce noise, gate errors, limited connectivity and measurement errors.',
          'Therefore, theoretical speedups do not automatically translate into practical advantages on current hardware.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Quantum algorithms are designed specifically for quantum hardware.',
          'Grover provides a quadratic search speedup in the query model.',
          'Shor uses quantum period finding for factoring-related problems.',
          'The QFT is an important quantum subroutine.',
          'Quantum advantage depends on the problem and implementation.',
          'Noise and hardware limitations remain major challenges.'
        ]
      }
    ]
  },

  'quantum-cryptography': {
    intro:
      'Quantum cryptography uses quantum properties to create communication protocols with security features that are fundamentally different from classical cryptography.',

    sections: [
      {
        title: 'Classical Cryptography',
        content: [
          'Classical cryptography protects information using mathematical techniques such as symmetric encryption, public-key cryptography and digital signatures.',
          'Many widely used public-key systems rely on the computational difficulty of mathematical problems such as factoring or discrete logarithms.'
        ]
      },

      {
        title: 'Why Quantum Cryptography?',
        content: [
          'Large-scale fault-tolerant quantum computers could threaten some widely used public-key cryptographic systems.',
          'Quantum key distribution provides a different approach: it uses properties of quantum states to detect certain forms of eavesdropping during key establishment.'
        ]
      },

      {
        title: 'Quantum Key Distribution',
        content: [
          'Quantum Key Distribution, or QKD, allows two parties to establish a shared secret key using quantum communication and a classical communication channel.',
          'The quantum part is used to detect disturbance caused by certain eavesdropping attempts.'
        ]
      },

      {
        title: 'BB84 Protocol',
        content: [
          'BB84 is one of the foundational QKD protocols.',
          'In simplified form, a sender prepares quantum states using randomly selected bases. The receiver measures using randomly selected bases.',
          'After transmission, the parties publicly compare which bases they used without revealing the measurement results. Matching-basis results can be used to form a raw key.'
        ]
      },

      {
        title: 'Measurement and Eavesdropping',
        content: [
          'Quantum measurement generally disturbs states when the measurement is incompatible with the state preparation basis.',
          'An eavesdropper attempting to intercept and resend quantum states can therefore introduce detectable errors under the assumptions of the protocol.'
        ]
      },

      {
        title: 'No-Cloning Principle',
        content: [
          'The quantum no-cloning theorem states that an unknown arbitrary quantum state cannot be perfectly copied.',
          'This is important for QKD because an eavesdropper cannot simply make a perfect copy of an unknown quantum state and keep one copy without affecting the protocol.'
        ]
      },

      {
        title: 'Security of QKD',
        content: [
          'QKD security depends on the protocol, physical implementation, assumptions and security analysis.',
          'Real systems can have vulnerabilities arising from imperfect detectors, sources, devices, side channels and implementation errors.'
        ]
      },

      {
        title: 'E91 Protocol',
        content: [
          'E91 is another QKD approach based on entangled quantum states.',
          'It connects quantum key distribution with entanglement and Bell-type correlations.'
        ]
      },

      {
        title: 'Practical Limitations',
        content: [
          'QKD requires specialized hardware and quantum communication infrastructure.',
          'Distance, photon loss, detector performance, noise and implementation complexity are important practical challenges.',
          'QKD is therefore not simply a drop-in replacement for all existing cryptographic systems.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'QKD uses quantum states to establish secret keys.',
          'BB84 is a foundational QKD protocol.',
          'Measurement disturbance can reveal eavesdropping.',
          'Unknown quantum states cannot be perfectly cloned.',
          'Real QKD systems require careful hardware security.',
          'QKD is different from post-quantum classical cryptography.'
        ]
      }
    ]
  },

  'quantum-machine-learning': {
    intro:
      'Quantum Machine Learning combines ideas from quantum computing and machine learning to explore whether quantum circuits can improve or transform particular learning tasks.',

    sections: [
      {
        title: 'What is Quantum Machine Learning?',
        content: [
          'Quantum Machine Learning, or QML, studies machine-learning methods that use quantum computation as part of the learning process.',
          'Some approaches use quantum circuits as models, while others use quantum computers to process or transform data.'
        ]
      },

      {
        title: 'Classical ML vs QML',
        content: [
          'Classical machine learning uses classical processors and mathematical models such as neural networks, decision trees and support-vector machines.',
          'QML may combine classical optimization and data processing with quantum circuits.',
          'Many practical QML approaches today are hybrid rather than purely quantum.'
        ]
      },

      {
        title: 'Encoding Classical Data',
        content: [
          'A classical dataset must somehow be represented using quantum states before a quantum circuit can process it.',
          'Common approaches include angle encoding, amplitude encoding and basis encoding.',
          'The cost of data loading can be important when evaluating whether a proposed QML method offers a practical advantage.'
        ]
      },

      {
        title: 'Quantum Feature Maps',
        content: [
          'A quantum feature map transforms classical input data into a quantum state.',
          'The resulting quantum state can contain complex relationships between encoded features.',
          'Quantum kernels can use these feature maps to compare data points in quantum feature spaces.'
        ]
      },

      {
        title: 'Parameterized Quantum Circuits',
        content: [
          'A parameterized quantum circuit contains gates whose parameters are adjusted during training.',
          'The circuit acts as a trainable quantum model.',
          'A classical optimizer can update the parameters based on a measured cost function.'
        ]
      },

      {
        title: 'Variational Quantum Algorithms',
        content: [
          'Variational methods use a parameterized circuit and a classical optimization loop.',
          'The quantum computer evaluates the circuit and measurements provide information about the objective function.',
          'The classical computer then updates the parameters and the process is repeated.'
        ]
      },

      {
        title: 'Quantum Kernels',
        content: [
          'Quantum kernel methods use quantum circuits to estimate similarities between data points after encoding them into quantum states.',
          'These similarities can then be used by classical machine-learning algorithms.'
        ]
      },

      {
        title: 'Hybrid Quantum-Classical Learning',
        content: [
          'Hybrid architectures divide the workload between classical and quantum processors.',
          'This approach is especially relevant to current noisy quantum hardware because classical computers can handle optimization and data-processing tasks while quantum processors execute selected circuits.'
        ]
      },

      {
        title: 'Challenges in QML',
        content: [
          'Current QML research faces challenges including noise, limited qubit counts, expensive measurements, optimization difficulties and the possibility of barren plateaus.',
          'A theoretical quantum model is not automatically better than a classical machine-learning model.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'QML combines quantum computing with machine learning.',
          'Classical data must be encoded into quantum states.',
          'Parameterized circuits can act as trainable models.',
          'Quantum kernels use quantum feature spaces.',
          'Many QML approaches are hybrid.',
          'Practical quantum advantage remains an active research question.'
        ]
      }
    ]
  },

  'real-world-applications': {
    intro:
      'Quantum computing is being investigated for applications across science, engineering, finance, chemistry, optimization and information security.',

    sections: [
      {
        title: 'Drug Discovery',
        content: [
          'Quantum computers may eventually help simulate molecular systems that are difficult to model accurately using classical methods.',
          'Better molecular simulation could support research into drug candidates and chemical interactions.'
        ]
      },

      {
        title: 'Chemistry and Molecular Simulation',
        content: [
          'Molecules obey quantum mechanical laws, which makes quantum computers a potentially natural tool for studying molecular structure and energy.',
          'Algorithms such as VQE have been investigated for estimating molecular ground-state energies on quantum hardware.'
        ]
      },

      {
        title: 'Materials Science',
        content: [
          'Quantum simulation could help researchers investigate new materials and understand electronic properties.',
          'Potential applications include batteries, superconducting materials and advanced catalysts.'
        ]
      },

      {
        title: 'Optimization',
        content: [
          'Many real-world problems involve finding good solutions among a huge number of possibilities.',
          'Examples include scheduling, routing, logistics and resource allocation.',
          'Quantum optimization algorithms are being researched to determine whether they can provide useful advantages for particular problem structures.'
        ]
      },

      {
        title: 'Finance',
        content: [
          'Quantum computing research in finance includes portfolio optimization, risk analysis, pricing and sampling problems.',
          'The practical benefit of quantum methods remains an active area of research.'
        ]
      },

      {
        title: 'Cryptography and Security',
        content: [
          'Future fault-tolerant quantum computers could affect widely used public-key cryptographic systems.',
          'This has motivated research into post-quantum cryptography and quantum communication technologies.'
        ]
      },

      {
        title: 'Machine Learning',
        content: [
          'Quantum machine learning explores whether quantum circuits can provide useful representations or computational advantages for selected learning problems.',
          'Most practical QML research currently involves hybrid quantum-classical systems.'
        ]
      },

      {
        title: 'Energy and Climate',
        content: [
          'Potential applications include material discovery, chemical simulation, optimization of energy systems and modeling of complex physical processes.',
          'These applications are promising research directions, but many are not yet commercially useful at large scale.'
        ]
      },

      {
        title: 'Current Hardware Limitations',
        content: [
          'Current quantum computers are affected by noise, decoherence, gate errors and limited numbers of high-quality qubits.',
          'Quantum error correction can reduce logical errors, but building large fault-tolerant machines requires substantial engineering resources.'
        ]
      },

      {
        title: 'Near-Term vs Future Applications',
        content: [
          'Near-term quantum computing focuses on experiments and hybrid algorithms that can run on noisy devices.',
          'Future fault-tolerant quantum computers could potentially run much larger algorithms with error-corrected logical qubits.',
          'It is important to distinguish demonstrated capabilities from long-term possibilities.'
        ]
      },

      {
        title: 'Key Takeaways',
        points: [
          'Quantum computing has potential applications in chemistry and materials.',
          'Optimization is an important research area.',
          'Finance and machine learning are being actively investigated.',
          'Quantum computing may affect cryptography.',
          'Current hardware has significant limitations.',
          'Many large-scale applications require future fault-tolerant quantum computers.'
        ]
      }
    ]
  }
}