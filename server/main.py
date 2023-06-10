from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from inputBeerData.beerJSON import InputBody, ValidationError
from expertSystem.expertSystem import getCandidateBeers
from fastapi.responses import JSONResponse
from fastapi import status

app = FastAPI()


# Returns the birras that match the conditions from the input body
@app.get("/birra")
def getBeer(inputData: InputBody):
    data = inputData.dict()
    candidateBeers = getCandidateBeers(data)
    return {"message": candidateBeers, "status": status.HTTP_200_OK}


@app.exception_handler(ValidationError)
def handleValidationError(_: Request, exc: ValidationError):
    return JSONResponse(
        status_code=exc.status_code,
        content=jsonable_encoder({"message": exc.message, "status": exc.status_code}),
    )
