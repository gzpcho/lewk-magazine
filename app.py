from flask import Flask, send_from_directory
from flask_cors import CORS
from api.extensions import db, cfg

app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

def register_blueprints(app):
    pass

def register_extensions(app):
    app.config.from_object(cfg)
    db.init_app(app)
    with app.app_context():
        db.drop_all()
        db.create_all()

register_extensions(app)
register_blueprints(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory(app.static_folder, 'index.html')
