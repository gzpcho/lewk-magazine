from flask import Flask, send_from_directory
from api.extensions import cfg

app = Flask(__name__, static_folder='client/build', static_url_path='/')

def register_blueprints(app):
    pass

def register_extensions(app):
    app.config.from_object(cfg)
    pass

register_extensions(app)
register_blueprints(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory(app.static_folder, 'index.html')
