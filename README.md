# TaDa
Web application that is a clone of Trello and Google Calendar. On the left side, a user can create notes, and on the right, the user can add events to a calendar. 

## Instructions for Running MVP

### MVP Notes:

<ul>
<li>you can only have 3 notes</li>
<li>once notes are saved you cannot edit or delete</li>
<li>once an event has been added it cannot be edited or deleted</li>
</ul>

The above features are not in the MVP, but will likely be accomplished for beta release.


## Build Docker Image

The Dockerfile is in the docker directory. To build:
```
docker build -t tada_flask_image /path/to/dir/with/Dockerfile
```

## Run Docker Container

To run a container based on the built image:
```
docker run --rm -it --name=tada_flask_server --network=host -P tada_flask_image /bin/bash
```

## Then

Restart MySQL and run flask in the container:
```
service mysql restart
TADA_APP=/tada/flask/tada.py flask run --host=0.0.0.0
```

## Finally, to Use TaDa

In Chrome, go to http://localhost:5000 sign in thru Google OAUTH and use the app. Add notes to the left side, and save them with the save button. Create events on the left with the create event button.
