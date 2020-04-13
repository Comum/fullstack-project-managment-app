# Project Managment App SERVER

This is the server side for the Project Managment App. It has a list of routes that will do some actions based on the options passed.

## How to run

- npm i - to install the dependencies
- npm start - to run the server
- npm run test - to run the tests

## Routes list

- /user
  - [POST] - registers a user
    - params: firstName, lastName, password
    - response: true if successful, error object if error occurs
- /login
  - [POST] - logs in user
    - params: userName, password
    - response: { userName } if successful, error object if error occurs
- /projects
  - [GET] - gets all user projects ( and tasks of project )
    - params: userName
  - [POST] - adds project
    - params: projectName, userName
  - [DELETE] - deletes project
    - params: projectId
- /tasks
  - [POST] - create task
    - params: projectId, taskName
  - [PATCH] - completes taks
    - params: taksId, projectId
  - [DELETE] - deletes task
    - params: taksId, projectId
