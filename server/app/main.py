from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud, database

# Initialize FastAPI app
app = FastAPI()

# CORS middleware to allow cross-origin requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://amelia-alvarado.netlify.app"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Dependency to get the DB session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create a contact
@app.post("/contacts/", response_model=schemas.ContactCreate)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    return crud.create_contact(db=db, contact=contact)

# Create all tables in the database
models.Base.metadata.create_all(bind=database.engine)
