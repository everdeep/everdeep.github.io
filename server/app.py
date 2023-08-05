from flask import Flask, abort
from flask_cors import CORS
from flask_marshmallow import Marshmallow

from http import HTTPStatus

from config import app_config

ma = Marshmallow()


def create_app():
    app = Flask(__name__, template_folder="templates")

    ## Initialize CORS
    CORS(app, supports_credentials=True)

    ## Initialize Config
    app.config.from_object(app_config)
    app.config["SWAGGER"] = {"title": "Crypto API", "uiversion": 3}

    # Order matters here
    ma.init_app(app)

    return app


if __name__ == "__main__":
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument(
        "-p", "--port", default=5000, type=int, help="port to listen on"
    )
    args = parser.parse_args()
    port = args.port

    app = create_app()

    app.run(debug=True, host="0.0.0.0", port=port)
