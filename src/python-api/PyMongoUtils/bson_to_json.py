from typing import Mapping, Any
from bson import json_util
from flask import Response


def bson_to_json(bson: Mapping[str, Any]) -> Response:
    return Response(
        json_util.dumps(bson),
        content_type="application/json",
    )