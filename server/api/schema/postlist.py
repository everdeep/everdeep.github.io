from flask_marshmallow import Schema
from marshmallow.fields import Str


class PostListSchema(Schema):
    class Meta:
        # Fields to expose
        fields = ["filename", "title"]

    filename = Str()
    title = Str()
