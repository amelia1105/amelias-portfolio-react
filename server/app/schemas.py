from pydantic import BaseModel

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

    class Config:
        orm_mode = True