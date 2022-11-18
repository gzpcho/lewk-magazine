from flask import Blueprint, make_response, jsonify
from ..models import Article

bp = Blueprint("articles", __name__, url_prefix="/api")

@bp.route("/articles")
def get_articles():
    article_list = [ a.serialize() for a in Article.query.all() ]
    return make_response(jsonify(article_list), 200)

@bp.route("/article/<article_id>")
def get_article(article_id):
    article = Article.query.get_or_404(article_id).serialize()
    return make_response(jsonify(article), 200)