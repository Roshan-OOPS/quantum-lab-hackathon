from pydantic import BaseModel, Field
from typing import Optional


class Gate(BaseModel):
    gate: str
    qubit: Optional[int] = None       # used for h, x, z
    control: Optional[int] = None     # used for cnot
    target: Optional[int] = None      # used for cnot


class Circuit(BaseModel):
    num_qubits: int = Field(ge=1, le=20)
    gates: list[Gate]
    shots: int = Field(default=1000, ge=1, le=100000)
