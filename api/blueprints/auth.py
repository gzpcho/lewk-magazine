import os
from flask import Blueprint, make_response, jsonify, request
from flask_jwt_extended import create_access_token, set_access_cookies, unset_jwt_cookies

bp = Blueprint("auth", __name__, url_prefix="/api")

@bp.route("/auth/token", methods=["POST"])
def create_token():
    try:
        username = request.json["username"]
        password = request.json["password"]
    except KeyError as err:
        return make_response(jsonify(err), 400)

    if os.getenv("ADMIN_USERNAME") != username or os.getenv("ADMIN_PASSWORD") != password:
        return make_response(jsonify({"msg": "Wrong credentials."}), 401)
    access_token = create_access_token(identity=username)
    response = jsonify({"access_token": access_token})
    set_access_cookies(response, access_token)
    return response

@bp.route('/auth/token/revoke', methods=["POST"])
def revoke_token():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response