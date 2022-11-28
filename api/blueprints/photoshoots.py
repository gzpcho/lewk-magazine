from flask import Blueprint, make_response, jsonify, request
from api.models import Photoshoot
from api.extensions import db

bp = Blueprint("photoshoots", __name__, url_prefix="/api")

@bp.route("/photoshoots")
def get_photoshoots():
    photoshoots = Photoshoot.query
    photoshoot_list = [ p.serialize() for p in photoshoots.all()]
    return make_response(jsonify(photoshoot_list), 200)

@bp.route("/photoshoot/<photoshoot_id>")
def get_photoshoot(photoshoot_id):
    photoshoot = Photoshoot.query.get_or_404(photoshoot_id).serialize()
    return make_response(jsonify(photoshoot), 200)

@bp.route("/photoshoot/<photoshoot_id>", methods=["POST"])
def post_photoshoot(photoshoot_id):
    print("adding..")
    try:
        new_photoshoot = Photoshoot(
            id=photoshoot_id,
            title=request.json["title"],
            photo_url_list=request.json["imageUrls"],
        )
        print(new_photoshoot.photo_url_list)
        db.session.add(new_photoshoot)
        db.session.commit()
    except KeyError as err:
        return make_response(jsonify(err), 400)
    return make_response(jsonify(new_photoshoot.serialize()), 200)

@bp.route("/photoshoot/<photoshoot_id>", methods=["DELETE"])
def delete_article(photoshoot_id):
    try:
        photoshoot = Photoshoot.query.filter_by(id=photoshoot_id).one()
        db.session.delete(photoshoot)
        db.session.commit()
    except:
        return make_response(jsonify({"msg": "Photoshoot not found."}, 401))
    return make_response(jsonify({"msg": "Photoshoot deleted successfully."}, 200))