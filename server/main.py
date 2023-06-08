from experta import *
from facts import *
# from fastapi import FastAPI, Request
# from fastapi.encoders import jsonable_encoder
#from schema import InputBody, ValidationError
from systems import BeerRules
from http import HTTPStatus
from flask import Flask, jsonify, request
# from fastapi.responses import JSONResponse
# from fastapi import status

app = Flask(__name__)

# Returns the birras that match the conditions from the input body
@app.route("/beer")
def getBeer():
    data = request.get_json()
    engine = BeerRules()
    engine.reset()
    engine.declare(BeerAttributes(
        intensity=data["intensity"],
        color=data["color"],
        bitterness=data["bitterness"],
        hop=data["hop"],
        fermentation=data["fermentation"],
        yeast=data["yeast"],
    ))
    engine.run()
    return engine.candidateBeers

# def getCandidateBeers(data):
#     return ["FIXME I'm not working with experta"]

# @app.errorhandler(ValidationError)
# def handleValidationError(exc: ValidationError):
#     return jsonify({"message": exc.message, "status": exc.status_code})


if __name__ == "__main__":
    app.run(debug=True)