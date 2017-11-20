
// db will be called "tada" based on app name

db.notes.save({    
    "username":"testuser",
    "title":"test note title",
    "noteList": [
                {"text":"test text 1"},
                {"text":"test text 2"}
            ],
    "x":0,
    "y":0,
    "noteID":0,
    "color": "#ffffff"
});


db.events.save({
    "username":"testuser",
    "title":"test event title",
    "eventList": [
                {"start":"2017-10-14 12:00","end":"2017-10-14 01:00"},
                {"start":"2017-10-15 12:00","end":"2017-10-15 01:00"}            
            ],
    "eventID":0,
    "color": "#ffffff"
});

db.auth.save({
	"username": "testuser",
	"auth_token": "token"
});


