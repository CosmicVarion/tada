from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_assets import Environment, Bundle
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

from google.oauth2 import id_token
from google.auth.transport import requests





app = Flask(__name__,
            template_folder = '/var/www/ubcse442tada.com/tada/templates',
            static_folder   = '/var/www/ubcse442tada.com/tada/templates')

application = app

assets = Environment(app)

# landing page javascript and css
lp_css = Bundle('landing_page/css/bootstrap.min.css',
                'landing_page/css/landing-page.css',
                output='gen/lp_packed.css')
assets.register('landing_page_css',lp_css)

#lp_js = Bundle('landing_page/js/jquery.min.js',
lp_js = Bundle('landing_page/js/popper.min.js',
               'landing_page/js/bootstrap.min.js',
               output='gen/lp_packed.js')
assets.register('landing_page_js',lp_js)

# app page javascript and css
ap_js = Bundle('app_page/js/moment.min.js',
               'common/js/jquery.min.js',
               'app_page/js/fullcalendar.js',
               'app_page/js/note.js',
               'common/js/bootstrap.js',
               'app_page/js/bootstrap-datepicker.js',
               'app_page/js/bootstrap-datetimepicker.js',
               'common/js/jquery.backtotop.js',
               'common/js/jquery.mobilemenu.js',
               'common/js/jquery.placeholder.min.js',
               'common/js/popper.min.js',
               output='gen/ap_packed.js')
assets.register('app_page_js',ap_js)

ap_css = Bundle('app_page/css/fullcalendar.css',
                'common/css/layout.css',
                'common/css/bootstrap.css',
                'common/css/jquery-ui.css',
                'app_page/css/bootstrap-datepicker.css',
                'app_page/css/bootstrap-datetimepicker.css',
                'app_page/css/note.css',
                output='gen/ap_packed.css')
assets.register('app_page_css',ap_css)

mongo = PyMongo(app)




# support method used to return success to front end
def success(message, _id):
    return jsonify({'success': message, '_id': _id})

# support method used to return error to front end
def error(message):
    return jsonify({'error':message})




# landing page page
@app.route('/')
def landing_page():
    return render_template('landing_page/landing_page.html')

# images
@app.route('/img/<path:filename>.png')
def send_png(filename):
    return send_from_directory('/var/www/ubcse442tada.com/tada/templates/landing_page/img',filename+'.png')

@app.route('/img/<path:filename>.jpg')
def send_jpg(filename):
    return send_from_directory('/var/www/ubcse442tada.com/tada/templates/landing_page/img',filename+'.jpg')


# app
@app.route('/app')
def app_page():
    return render_template('app_page/app_page.html')




# add note to database, see setup_mongo.js for example JSON
@app.route('/add_note',methods=['POST'])
def add_note(): 
    json_str  = request.get_json()
    print(json_str)
    json_dict = dict(json_str)    

    token = json_dict['auth_token']
    usercheck = check_token(token)
    if not usercheck:
        content = 'Validation failed'
        return content, 401
    del json_dict['auth_token']
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

    token = json_dict['auth_token']
    usercheck = check_token(token)
    if not usercheck:
        content = 'Validation failed'
        return content, 401
    del json_dict['auth_token']
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

    token = json_dict['auth_token']
    usercheck = check_token(token)
    if not usercheck:
        content = 'Validation failed'
        return content, 401
    del json_dict['auth_token']
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

    token = json_dict['auth_token']
    usercheck = check_token(token)
    if not usercheck:
        content = 'Validation failed'
        return content, 401
    del json_dict['auth_token']
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

    token = json_dict['auth_token']
    usercheck = check_token(token)
    if not usercheck:
        content = 'Validation failed'
        return content, 401
    del json_dict['auth_token']
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

    token = json_dict['auth_token']
    usercheck = check_token(token)
    if not usercheck:
        content = 'Validation failed'
        return content, 401
    del json_dict['auth_token']
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

    token = json_dict['auth_token']
    usercheck = check_token(token)
    if not usercheck:
        content = 'Validation failed'
        return content, 401
        
    username = json_dict['username']
    notes = [note for note in mongo.db.notes .find({"username": username})]
    for note in notes:
        note['_id'] = str(note['_id'])
    
    events = [event for event in mongo.db.events.find({"username": username})]
    for event in events:
        event['_id'] = str(event['_id'])    
    
    return jsonify({"notes": notes, "events": events})




def check_token(token):
    CLIENT_ID = '275995304578-5k2tiodmufnlb9tkqjitaf5tq0its755.apps.googleusercontent.com'
    try:
        authcheck = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
    except Exception as e:
        return False

    return authcheck['iss'] in ['accounts.google.com', 'https://accounts.google.com']  




if __name__ == '__main__':
    app.run()
