from flask import Flask, send_from_directory
from flask_cors import CORS
from api.blueprints import articles, bucket, photoshoots
from api.extensions import db, jwt, cfg
from api.data import dummy_articles, dummy_photoshoots

app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

def register_blueprints(app):
    app.register_blueprint(articles.bp)
    app.register_blueprint(bucket.bp)
    app.register_blueprint(photoshoots.bp)

def register_extensions(app):
    app.config.from_object(cfg)
    db.init_app(app)
    with app.app_context():
        db.drop_all()
        db.create_all()
        db.session.add(dummy_articles[0])
        db.session.add(dummy_articles[1])
        db.session.add(dummy_photoshoots[0])
        db.session.commit()
    jwt.init_app(app)

register_extensions(app)
register_blueprints(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory(app.static_folder, 'index.html')
