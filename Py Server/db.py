from flask_pymongo import PyMongo
import flask

app = flask.Flask(__name__)

mongodb_client = PyMongo(app, uri="mongodb+srv://imprakharzz11:prakharlodu@cluster0.e9mfv8j.mongodb.net/")
db = mongodb_client.db

app.config["MONGO_URI"] = "mongodb+srv://imprakharzz11:prakharlodu@cluster0.e9mfv8j.mongodb.net/"
mongodb_client = PyMongo(app)
db = mongodb_client.db

@app.route("/flaskget")
def home():
    user = db.users.find()
    return flask.jsonify([users for users in user])