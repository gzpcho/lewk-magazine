from flask import Blueprint, request
from flask_jwt_extended import jwt_required
from api.extensions import bucket
from werkzeug.utils import secure_filename

bp = Blueprint("bucket", __name__, url_prefix="/api/bucket")

@bp.route("/upload", methods=["POST"])
def upload_file():
    file = request.files["file"]
    filename = secure_filename(file.filename)
    bucket.upload_file_to_s3(file, filename)
    return {
        "url": bucket.get_url(filename)
    }