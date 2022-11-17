import os
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

class Config:
    ENV = os.getenv("ENV", "production")
    SECRET_KEY = os.getenv("FLASK_SECRET_KEY")

class ProductionConfig(Config):
    TESTING = False

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.getenv("PROD_DATABASE_URI")

class DevelopmentConfig(Config):
    TESTING = True

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.getenv("DEV_DATABASE_URI")
