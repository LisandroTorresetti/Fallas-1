from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from schema.schema import InputBody, ValidationError
from fastapi.responses import JSONResponse
from fastapi import status

# Possible beers
CREAM_ALE = "Cream Ale"
BALTIC_PORTER = "Baltic Porter"
KOLSCH = "Kolsch"
WHITE_IPA = "Ipa Blanca"
CZECH_AMBER_LAGER = "Lager Ambar Checa"
NATALIA_NATALIA = "No es posible realizar una birra con estos atributos"

app = FastAPI()

# Returns the birras that match the conditions from the input body
@app.get("/birra")
def getBeer(inputData: InputBody):
    data = inputData.dict()
    candidateBeers = getCandidateBeers(data)
    return {"message": candidateBeers, "status": status.HTTP_200_OK}

@app.exception_handler(ValidationError)
def handle_course_exception(request: Request, exc: ValidationError):
    return JSONResponse(
        status_code=exc.status_code,
        content=jsonable_encoder({"message": exc.message, "status": exc.status_code}),
    )

def getCandidateBeers(data):
    # ToDo: implement logic with experta to get the candidate beers
    return ["Cream Ale", "Sarasa"]

# Run the server using uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(main, host="0.0.0.0", port=8000)
