from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_assets import Environment, Bundle
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

from google.oauth2 import id_token #Make sure these 3 are actually installed
from google.auth.transport import requests
from flask.ext.api import status





app = Flask(__name__,
            template_folder='/var/www/html/tada/UI',
            static_folder='/var/www/html/tada/UI')

application = app

assets = Environment(app)

js = Bundle('fullcalendar/lib/moment.min.js',
            'fullcalendar/lib/jquery.min.js',
            'fullcalendar/fullcalendar.js',
            'note/note.js',
            'layout/scripts/bootstrap.js',
            'layout/scripts/bootstrap-datepicker.js',
            'layout/scripts/bootstrap-datetimepicker.js',
            'layout/scripts/jquery.backtotop.js',
            'layout/scripts/jquery.mobilemenu.js',
            'layout/scripts/jquery.placeholder.min.js',
            'vendor/popper/popper.min.js',
            output='gen/packed.js')
assets.register('js',js)

css = Bundle('fullcalendar/fullcalendar.css',
             'layout/styles/layout.css',
             'layout/styles/bootstrap.css',
             'layout/styles/jquery-ui.css',
             'layout/styles/bootstrap-datepicker.css',
             'layout/styles/bootstrap-datetimepicker.css',
             'note/note.css',
             'vendor/font-awesome/css/font-awesome.css',
             'css/landing-page.css',
             output='gen/packed.css')
assets.register('css',css)

mongo = PyMongo(app)




# support method used to return success to front end
def success(message, _id):
    return jsonify({'success': message, '_id': _id})




# support method used to return error to front end
def error(message):
    return jsonify({'error':message})




# home page
@app.route('/')
def root():
	return render_template('index.html')




# images
@app.route('/img/<path:filename>')
def send_img(filename):
    return send_from_directory('/var/www/html/tada/UI/img',filename,mimetype='image/png')



# font resources
@app.route('/fonts/<path:filename>')
def send_font(filename):
    return send_from_directory('/var/www/html/tada/UI/vendor/font-awesome/fonts/',filename)




# add note to database, see setup_mongo.js for example JSON
@app.route('/add_note',methods=['POST'])
def add_note(): 
    json_str  = request.get_json()
    print(json_str)
    json_dict = dict(json_str)    
	#validation check
	username = json_dict['username']
	token = json_dict['auth_token']
	usercheck = check_user(username, token)
	if not usercheck:
		content = 'Validation failed'
		return content, status.HTTP_401_UNAUTHORIZED
    
    _id = str(ObjectId())
    json_dict['_id'] = _id

    try:	
        mongo.db.notes.insert_one(json_dict)
    except Exception as e:
        print(e)
        return error(e)

    return success('add note successful', _id)




# add event to database
@app.route('/add_event',methods=['POST'])
def add_event():
    json_str  = request.get_json()
    print(json_str)
    json_dict = dict(json_str)
	#validation check
	username = json_dict['username']
	token = json_dict['auth_token']
	usercheck = check_user(username, token)
	if not usercheck:
		content = 'Validation failed'
		return content, status.HTTP_401_UNAUTHORIZED
    
    _id = str(ObjectId())
    json_dict['_id'] = _id
    
    print(json_dict)

    try:	
        mongo.db.events.insert_one(json_dict)
    except Exception as e:
        print(e)
        return error(e)

    return success('add event succeeded', _id)




# delete note by _id from database
@app.route('/delete_note',methods=['POST'])
def delete_note():
    json_str  = request.get_json()
    print(json_str)
    json_dict = dict(json_str)    
	#validation check
	username = json_dict['username']
	token = json_dict['auth_token']
	usercheck = check_user(username, token)
	if not usercheck:
		content = 'Validation failed'
		return content, status.HTTP_401_UNAUTHORIZED

    try:	
        _id = json_dict['_id']
        print((mongo.db.notes.delete_one({'_id': _id})).deleted_count)
    except Exception as e:
        print(e)
        return error(e)

    return success('delete note succeeded','')




# delete event by _id from database
@app.route('/delete_event',methods=['POST'])
def delete_event():
    json_str  = request.get_json()
    print(json_str)	
    json_dict = dict(json_str)    
	#validation check
	username = json_dict['username']
	token = json_dict['auth_token']
	usercheck = check_user(username, token)
	if not usercheck:
		content = 'Validation failed'
		return content, status.HTTP_401_UNAUTHORIZED

    try:	
        _id = json_dict['_id']
        print((mongo.db.events.delete_one({'_id': _id})).deleted_count)
    except Exception as e:
        print(e)
        return error(e)

    return success('delete event succeeded','')




# edit note by _id in database
@app.route('/edit_note',methods=['POST'])
def edit_note():
    json_str  = request.get_json()
    print(json_str)	
    json_dict = dict(json_str)
	#validation check
	username = json_dict['username']
	token = json_dict['auth_token']
	usercheck = check_user(username, token)
	if not usercheck:
		content = 'Validation failed'
		return content, status.HTTP_401_UNAUTHORIZED

    try:
        _id = json_dict['_id']
        del json_dict['_id']
        mongo.db.notes.update_one({'_id': _id}, {'$set':json_dict})
    except Exception as e:
        print(e)
        return error(e)

    return success('update note succeeded','')




# edit event by _id in database
@app.route('/edit_event',methods=['POST'])
def edit_event():
    json_str  = request.get_json()
    print(json_str)	
    json_dict = dict(json_str)
	#validation check
	username = json_dict['username']
	token = json_dict['auth_token']
	usercheck = check_user(username, token)
	if not usercheck:
		content = 'Validation failed'
		return content, status.HTTP_401_UNAUTHORIZED

    try:	
        _id = json_dict['_id']
        del json_dict['_id']
        mongo.db.events.update_one({'_id': _id}, {'$set':json_dict})
    except Exception as e:
        print(e)
        return error(e)

    return success('update event succeeded','')




# return a user's notes and events
@app.route('/login',methods=['POST'])
def login():
    json_str  = request.get_json()
    print(json_str)	
    json_dict = dict(json_str)
    username = json_dict['username']
	token = json_dict['auth_token']
	usercheck = check_user(username, token)
	if not usercheck:
		content = 'Validation failed'
		return content, status.HTTP_401_UNAUTHORIZED
		
    
    notes = [note for note in mongo.db.notes .find({"username": username})]
    for note in notes:
        note['_id'] = str(note['_id'])
    
    events = [event for event in mongo.db.events.find({"username": username})]
    for event in events:
        event['_id'] = str(event['_id'])    
    
    return jsonify({"notes": notes, "events": events})

def check_user(username, token):
	CLIENT_ID = '275995304578-5k2tiodmufnlb9tkqjitaf5tq0its755.apps.googleusercontent.com'
	try:
		authcheck = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
	except Exception as e:
		return false
	if authcheck['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
        return false
	#if all checks pass, theyre good
	return true	
		

	
		

if __name__ == '__main__':
    app.run()
