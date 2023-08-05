import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")

    # Flask-User settings
    TRACK_USAGE_USE_FREEGEOIP = True
    TRACK_USAGE_FREEGEOIP_ENDPOINT = "https://extreme-ip-lookup.com/json/{ip}?key=Qn97RtiI2gwjStzJJjuG"

    # Logging
    LOG_BASE_PATH = os.getenv("LOG_BASE_PATH")


class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False

if os.environ.get("ENV") == "production":
    app_config = ProductionConfig()
else:
    app_config = DevelopmentConfig()
