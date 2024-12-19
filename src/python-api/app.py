from flask import Flask
from flask_smorest import Api, Blueprint, abort
from flask_cors import CORS
from bson import ObjectId
from PyMongoUtils.get_database import get_database
from PyMongoUtils.bson_to_json import bson_to_json
from APIUtils.APIConfig import APIConfig
from APIUtils.CourseSchema import CourseSchema
from APIUtils.CourseQueryArgsSchema import CourseQueryArgsSchema

# def create_app(db_username, db_password):
#     server = Flask(__name__)
#     server.config.from_object(APIConfig)
#     CORS(server)
#     api = Api(server)

#     # Connect to MongoDB database
#     database = get_database(db_username, db_password) 
#     course_collection = database["Learnify Courses"]

#     #create api blueprint
#     courses_bp = Blueprint("Courses", "courses", url_prefix="/courses", description="Online CS Courses API")

#     @courses_bp.route("/")
#     @courses_bp.arguments(CourseQueryArgsSchema, location="query")
#     @courses_bp.response(200, CourseSchema(many=True))
#     def get_courses(args):
#         """Find courses

#         Return courses that match parameters."""

#         try:
#             data = {"results": list(course_collection.find(args))}

#             for entry in data["results"]: 
#                 entry["_id"] = str(entry["_id"]) # stringify ObjectIds

#             return bson_to_json(data)
#         except TypeError:
#             abort(400, message="Query arguments are not in the correct format")


#     @courses_bp.route("/<course_id>")
#     @courses_bp.response(200, CourseSchema)
#     def get_course_by_id(course_id):
#         """Find courses by id

#         Return courses based on id."""

#         course = course_collection.find_one({"_id": ObjectId(course_id)})
#         course["_id"] = str(course["_id"]) # stringify ObjectId
        
#         if (course == None):
#             abort(404, message="Course not found.")

#         return bson_to_json(course)


#     api.register_blueprint(courses_bp)

#     return server

from flask_cors import CORS

def create_app(db_username, db_password):
    server = Flask(__name__)
    CORS(server)  # Enable CORS for all routes
    server.config.from_object(APIConfig)
    api = Api(server)

    # MongoDB setup
    database = get_database(db_username, db_password) 
    course_collection = database["Learnify Courses"]

    # API Blueprint
    courses_bp = Blueprint("Courses", "courses", url_prefix="/courses", description="Online CS Courses API")

    @courses_bp.route("/")
    @courses_bp.arguments(CourseQueryArgsSchema, location="query")
    @courses_bp.response(200, CourseSchema(many=True))
    def get_courses(args):
        """Find courses"""
        try:
            data = {"results": list(course_collection.find(args))}

            for entry in data["results"]: 
                entry["_id"] = str(entry["_id"])  # Convert ObjectId to string

            return bson_to_json(data)
        except TypeError:
            abort(400, message="Query arguments are not in the correct format")

    @courses_bp.route("/<course_id>")
    @courses_bp.response(200, CourseSchema)
    def get_course_by_id(course_id):
        """Find course by ID"""
        course = course_collection.find_one({"_id": ObjectId(course_id)})
        if course is None:
            abort(404, message="Course not found.")
        course["_id"] = str(course["_id"])  # Convert ObjectId to string
        return bson_to_json(course)

    api.register_blueprint(courses_bp)
    return server
