import os
from .config import DevelopmentConfig, ProductionConfig

if os.getenv("ENV") == "development":
    cfg = DevelopmentConfig()
else:
    cfg = ProductionConfig()