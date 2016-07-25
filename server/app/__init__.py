from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)
ma = Marshmallow(app)


if app.config['DEBUG']:
	from flask_cors import CORS
	CORS(app, expose_headers=['Link'])

	db.create_all()
	db.session.commit()


from . import views
