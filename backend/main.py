from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

from models import Circuit
from quantum_engine import simulate as run_quantum_simulation
import reasoning_routes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(reasoning_routes.router)

@app.get("/")
def home():
    return {"success": True, "message": "Quantum Lab Backend is running"}

@app.post("/simulate")
def simulate(circuit: Circuit):
    gates_as_dicts = [
        {k: v for k, v in gate.model_dump().items() if v is not None}
        for gate in circuit.gates
    ]
    result = run_quantum_simulation(gates_as_dicts, circuit.num_qubits, circuit.shots)
    return {
        "success": True,
        "message": "Circuit simulated successfully",
        "result": result
    }