from api.extensions import db

class Article(db.Model):
    __tablename__ = "articles"

    id = db.Column(db.String(), primary_key=True)
    title = db.Column(db.String(), nullable=False)
    tagline = db.Column(db.String(), nullable=False)
    copy = db.Column(db.String(), nullable=False)
    image_url = db.Column(db.String())
    author = db.Column(db.String())
    issue_no = db.Column(db.Integer)
    issue_url = db.Column(db.String())

    def serialize(self):
        return {
            "metadata": {
                "articleId": self.id,
                "author": self.author,
                "issueNo": self.issue_no,
                "issueUrl": self.issue_url
            },
            "title": self.title,
            "tagline": self.tagline,
            "copy": self.copy,
            "imageUrl": self.image_url,
        }
