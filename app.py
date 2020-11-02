import flask
from flask import Flask, request, render_template, session, url_for
from flask.json import jsonify
from flask.json import loads
from flask_cors import CORS
import time
import os
import flask_login
from flask_login import login_user, logout_user, LoginManager, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from code_desk_mechanics.mechanics import do
from flask_sqlalchemy import SQLAlchemy
import psycopg2
# from models import *

db_path = 'sqlite:////' + os.path.dirname(os.path.abspath(__name__)) + '/database.db'



application = Flask(__name__, template_folder='build/', static_folder='build/static')

application.config['SQLALCHEMY_DATABASE_URI']           = db_path
application.config['SQLALCHEMY_TRACK_MODIFICATIONS']    = True
application.config['SQLALCHEMY_ECHO']                   = False
application.config['SECRET_KEY']                        = b'_5#y2L"F4Q8z\n\xec]/'
application.config['REMEMBER_COOKIE']                   = True
application.config['REMEMBER_COOKIE_SECURE']            = True
application.config['REMEMBER_COOKIE_HTTPONLY']          = True

login_manager   = LoginManager(application)
db              = SQLAlchemy(application)
cors            = CORS(application)

@application.errorhandler(405)
def error404(e):
    return render_template('index.html')

@application.errorhandler(404)
def error404(e):
    return render_template('index.html')

@login_manager.user_loader
def user_loader(id):
    if User.query.get(id) != None:
        return User.query.get(id)
    else:
        return None

###############################################
###############################################
# Here ar models
class User(db.Model, flask_login.UserMixin):
    id       = db.Column(db.Integer, primary_key=True, unique=True, autoincrement=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(500), nullable=False)
    email    = db.Column(db.String(50))




###############################################
###############################################
# Here are routes
@application.route("/", methods = ['GET'])
def index():
    return render_template('index.html')

@application.route('/is_logged')
def is_logged():
    if current_user.is_authenticated == True:
        return {'response': 'true'}
    else:
        return {'response': 'false'}

@application.route('/signup', methods = ['POST'])
def sign_up():
   time.sleep(2)
   try:
       username = loads(request.data)['username']
       if User.query.filter_by(username=username).first() != None:
           return {'response': 'false', 'reason': 'User already exists'}
       email    = loads(request.data)['email']
       password = loads(request.data)['password']
       new_user = User(username=username, email=email, password=generate_password_hash(password))
       db.session.add(new_user)
       db.session.commit()
       return {'response': 'true'}
   except:
       return {'response': 'false', 'reason': 'Something goes wrong, I am sorry...'}

@application.route('/login', methods = ['POST'])
def login():
    try:
        username = loads(request.data)['username']
        password = loads(request.data)['password']
        usr      = User.query.filter_by(username=username).first()
        if usr == None:
            return {"response": "false", "reason": "User doesn't exists"}
        hashpass = usr.password
        if check_password_hash(hashpass, password) == True:
            login_user(usr)
            return {"response": "true"}
        else:
            return {"response": "false", "reason": "Invalid password"}
    except:
        return {'response': 'false', 'reason': 'Something goes wrong, I am sorry...'}

@application.route('/logout', methods=['POST', 'GET'])
@login_required
def logout():
    logout_user()
    return 'logged out'

@application.route('/runcode', methods=['POST'])
def run_code():
    try:
        out = request.get_json(force=True)['code']
        out = do(out)
        return {'response':out}

    except Exception as e:
        return {'response':str(e)}
