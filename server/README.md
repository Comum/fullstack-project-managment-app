# Project Managment App SERVER

This is the server side for the Project Managment App. It has a list of routes that will do some actions based on the options passed.

## How to run

- npm start - to run the server
- npm run test - to run the tests

## Routes list

- /user
  - [POST] - registers a user
    - params: firstName, lastName, password
    - response: true if successful, error object if error occurs
  - [GET] - logs in user
    - params: userName, password
    - response: { userName, userId } if successful, error object if error occurs
- /projects
  - [GET] - gets all user projects ( and tasks of project )
    - params: userId
  - [POST] - adds project
    - params: projectName, userId
  - [DELETE] - deletes project
    - params: projectId
- /tasks
  - [POST] - create task
    - params: projectId
  - [PATCH] - completes taks
    - params: taksId, projectId
  - [DELETE] - deletes task
    - params: taksId, projectId
