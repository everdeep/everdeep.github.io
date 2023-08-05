from http import HTTPStatus
from flask import Blueprint, jsonify, request
from api.service import PostService
from api.schema import PostSchema

blog_api = Blueprint("api", __name__)


@blog_api.route("/")
def blog():
    """
    A test endpoint for the blog
    ---
    """
    result = PostService().get_test_post()
    print(result)
    return PostSchema().dump(result), HTTPStatus.OK


@blog_api.route("/posts")
def posts():
    """
    Returns a list of all blog posts names in order of most recent
    ---
    """
    type = request.args.get("type")
    if type is None:
        return [], HTTPStatus.OK

    result = PostService().get_posts(type)
    return jsonify(result), HTTPStatus.OK


@blog_api.route("/posts/<name>")
def post(name):
    """
    Returns the content of a blog post
    ---
    """
    type = request.args.get("type")
    if type is None:
        return [], HTTPStatus.OK

    result = PostService().get_post(name, type)
    if result is None:
        return jsonify({"error": "Not found"}), HTTPStatus.NOT_FOUND

    return PostSchema().dump(result), HTTPStatus.OK
