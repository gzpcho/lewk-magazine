from flask import Blueprint, make_response, jsonify, request
from api.models import Article
from api.extensions import db

bp = Blueprint("articles", __name__, url_prefix="/api")

@bp.route("/articles")
def get_articles():
    articles = Article.query
    issue = request.args.get("issue")
    if issue is not None:
        articles = articles.filter_by(issue_no=request.args.get("issue"))
    article_list = [ a.serialize() for a in articles.all()]
    return make_response(jsonify(article_list), 200)

@bp.route("/article/<article_id>")
def get_article(article_id):
    article = Article.query.get_or_404(article_id).serialize()
    return make_response(jsonify(article), 200)

@bp.route("article/<article_id>", methods=["POST"])
def post_article(article_id):
    try:
        new_article = Article(
            id=article_id,
            title=request.json["title"],
            tagline=request.json["tagline"],
            copy=request.json["copy"],
            image_url=request.json["image"]["url"],
            author=request.json["author"],
            issue_no=request.json["issue"]["number"],
            issue_url=request.json["issue"]["url"],
        )
        db.session.add(new_article)
        db.session.commit()
    except KeyError as err:
        return make_response(jsonify(err), 400)
    return make_response(jsonify(new_article.serialize()), 200)

@bp.route("/article/<article_id>", methods=["DELETE"])
def delete_article(article_id):
    try:
        article = Article.query.filter_by(id=article_id).one()
        db.session.delete(article)
        db.session.commit()
    except:
        return make_response(jsonify({"msg": "Article not found."}, 401))
    return make_response(jsonify({"msg": "Article deleted successfully."}, 200))