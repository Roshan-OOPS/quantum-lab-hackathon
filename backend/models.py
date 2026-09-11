from pydantic import BaseModel, Field


class Gate(BaseModel):
    gate: str
    qubit: int


class Circuit(BaseModel):
    qubits: int = Field(ge=1, le=20)
    gates: list[Gate]
    shots: int = Field(default=1000, ge=1, le=100000)