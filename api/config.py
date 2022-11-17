import os
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())


class Config:
    ENV = os.getenv("ENV", "production")
    SECRET_KEY = os.getenv("FLASK_SECRET_KEY")

class ProductionConfig(Config):
    TESTING = False



class DevelopmentConfig(Config):
    TESTING = True

