import os
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from api.config import DevelopmentConfig, ProductionConfig

db = SQLAlchemy()
jwt = JWTManager()

if os.getenv("ENV") == "development":
    cfg = DevelopmentConfig()
else:
    cfg = ProductionConfig()