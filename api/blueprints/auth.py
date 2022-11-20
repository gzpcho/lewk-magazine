import os
from flask import Blueprint, make_response, jsonify, request
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity

bp = Blueprint("articles", __name__, url_prefix="/api")

@bp.route("/auth/token", method=["POST"])
def create_token():
    try:
        username = request.json["username"]
        password = request.json["password"]
    except KeyError as err:
        return make_response(jsonify(err), 400)

    if os.getenv("ADMIN_USERNAME") != username or os.getenv("ADMIN_PASSWORD") != password:
        return make_response(jsonify({"msg": "Wrong credentials."}), 401)
    access_token = create_access_token(identity=username)
    return make_response(jsonify({"access_token": access_token}), 200)
