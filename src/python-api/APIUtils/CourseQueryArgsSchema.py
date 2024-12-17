import marshmallow as ma

class CourseQueryArgsSchema(ma.Schema):
    skills = ma.fields.String()
    prerequisites = ma.fields.String()
    platform = ma.fields.String()