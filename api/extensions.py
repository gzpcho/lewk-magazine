import os
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from api.config import DevelopmentConfig, ProductionConfig
from api.external.AwsBucketApi import AwsBucketApi

db = SQLAlchemy()
jwt = JWTManager()
bucket = AwsBucketApi()

if os.getenv("ENV") == "development":
    cfg = DevelopmentConfig()
else:
    cfg = ProductionConfig()