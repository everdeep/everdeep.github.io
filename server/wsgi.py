from flask import abort
# from tracker import TrackUsage
# from tracker.storage.sql import SQLStorage

from app import create_app
from api.route import blog_api

from config import app_config

# Server config
DEBUG = True
MOCK = True

app = create_app()

# Track usage
# t = TrackUsage(app, [SQLStorage(engine=ENGINE, table_name="server_activity")])


if __name__ == "__main__":
    # Register blueprints
    app.register_blueprint(blog_api, url_prefix="/api/blog", name="blog")

    @app.route("/", defaults={"u_path": ""})
    @app.route("/<path:u_path>")
    def catch_all(u_path):
        abort(404)
        # return render_template('index.html')

    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument(
        "-p", "--port", default=5001, type=int, help="port to listen on"
    )
    args = parser.parse_args()
    port = args.port

    app.run(debug=DEBUG, host="0.0.0.0", port=port)
