from fastapi import FastAPI
from models import Circuit

app = FastAPI()


@app.get("/")
def home():
    return {
        "success": True,
        "message": "Quantum Lab Backend is running"
    }


@app.post("/simulate")
def simulate(circuit: Circuit):
    return {
        "success": True,
        "message": "Circuit received successfully",
        "circuit": circuit.model_dump()
    }