import os
from flask_sqlalchemy import SQLAlchemy
from .config import DevelopmentConfig, ProductionConfig

db = SQLAlchemy()

if os.getenv("ENV") == "development":
    cfg = DevelopmentConfig()
else:
    cfg = ProductionConfig()