import marshmallow as ma

class CourseSchema(ma.Schema):
    _id = ma.fields.String()
    name = ma.fields.String()
    description = ma.fields.String()
    url = ma.fields.String()
    skills = ma.fields.String()
    prerequisites = ma.fields.String()
    platform = ma.fields.String()