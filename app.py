from flask import Flask, send_from_directory
from flask_cors import CORS
from api.blueprints import articles
from api.extensions import db, cfg
from api.data import dummy_articles

app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

def register_blueprints(app):
    app.register_blueprint(articles.bp)
    pass

def register_extensions(app):
    app.config.from_object(cfg)
    db.init_app(app)
    with app.app_context():
        db.drop_all()
        db.create_all()
        db.session.add(dummy_articles[0])
        db.session.add(dummy_articles[1])
        db.session.commit()

register_extensions(app)
register_blueprints(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory(app.static_folder, 'index.html')
