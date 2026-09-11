/* =========================================
   QUANTUM LAB JAVASCRIPT
========================================= */


/* =========================================
   POPUP FUNCTIONS
========================================= */

function showPopup(title, message) {

    const popup = document.getElementById("popup");

    const popupTitle =
        document.getElementById("popupTitle");

    const popupMessage =
        document.getElementById("popupMessage");

    popupTitle.innerText = title;

    popupMessage.innerText = message;

    popup.classList.add("active");
}


function closePopup() {

    const popup =
        document.getElementById("popup");

    popup.classList.remove("active");
}


/* =========================================
   START CHALLENGE
========================================= */

function startChallenge() {

    showPopup(
        "⚡ Quantum Challenge",
        "Welcome to the Quantum Challenge! Your first mission is to understand how a Hadamard gate creates a quantum superposition."
    );

}


/* =========================================
   QUICK DEMO
========================================= */

function quickDemo() {

    showPopup(
        "Quantum Lab Quick Demo",
        "Quick Demo started. Apply an H gate to |0⟩ and observe how the qubit enters an equal superposition of |0⟩ and |1⟩."
    );

}


/* =========================================
   INTERACTIVE MISSION
========================================= */

function launchMission() {

    showPopup(
        "Interactive Mission",
        "Mission: Create an equal superposition state. Apply the Hadamard (H) gate to qubit |0⟩. The expected probabilities are P(|0⟩) = 50% and P(|1⟩) = 50%."
    );

}


/* =========================================
   LEARNING CYCLE
========================================= */

function exploreCycle() {

    const cycle =
        document.getElementById("cycle");

    cycle.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   AI ANALYSIS
========================================= */

function analyzeExplanation() {

    const status =
        document.getElementById("aiStatus");

    status.innerText =
        "⟳ Analyzing...";

    status.style.background =
        "#17314a";

    status.style.color =
        "#65dfff";


    setTimeout(function () {

        status.innerText =
            "✓ Explanation analyzed";

        status.style.background =
            "#073f38";

        status.style.color =
            "#2be0bb";

        showPopup(
            "AI Diagnostic",
            "Your explanation shows a good understanding of the basic quantum concept. You correctly connected the Hadamard gate with superposition."
        );

    }, 1200);

}


/* =========================================
   UNDERSTANDING LEVEL
========================================= */

function understandingLevel() {

    const status =
        document.getElementById("aiStatus");

    status.innerText =
        "★ Intermediate";

    status.style.background =
        "#172f4c";

    status.style.color =
        "#63caff";


    showPopup(
        "Understanding Level",
        "Current estimated level: Intermediate. You have a strong foundation in qubits, superposition and basic quantum gates."
    );

}


/* =========================================
   AI FEEDBACK
========================================= */

function feedback() {

    showPopup(
        "AI Feedback & Next Step",
        "Next step: practice X, Z and CNOT gates. Then try building a Bell State circuit and explain why the two qubits become entangled."
    );

}


/* =========================================
   LEARNING TRACK
========================================= */

function selectTrack(track) {

    let message = "";

    if (track === "Beginner") {

        message =
            "Beginner Track selected. Start with quantum computing fundamentals, bits, qubits, superposition and measurement.";

    }

    else if (track === "Intermediate") {

        message =
            "Intermediate Track selected. Start exploring H, X, Z and CNOT gates, multi-qubit circuits and entanglement.";

    }

    else if (track === "Advanced") {

        message =
            "Advanced Track selected. Explore Grover's algorithm, Shor's algorithm, QKD, QML and real-world quantum applications.";

    }


    showPopup(
        track + " Learning Track",
        message
    );

}


/* =========================================
   BEGIN JOURNEY
========================================= */

function beginJourney() {

    showPopup(
        "Your Quantum Journey",
        "Your journey has started! Learn the concept, build a circuit, simulate the result, explain your reasoning and test your knowledge."
    );

}


/* =========================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================= */

document
    .getElementById("popup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });


/* =========================================
   KEYBOARD ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePopup();

        }

    }
);


/* =========================================
   NAVIGATION ACTIVE STATE
========================================= */

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigationLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    function() {

        console.log(
            "Quantum Lab successfully loaded."
        );

        console.log(
            "Quantum learning environment ready."
        );

    }
);