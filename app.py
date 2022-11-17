from flask import Flask
from api.extensions import cfg

app = Flask(__name__)

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
    return "Hello World!"
