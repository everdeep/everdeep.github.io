from flask_marshmallow import Schema
from marshmallow.fields import Str


class PostSchema(Schema):
    class Meta:
        # Fields to expose
        fields = ["name", "content"]

    name = Str()
    content = Str()
