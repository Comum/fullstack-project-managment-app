# Project Managment App

This is a fullstack project for the EDirectInsure challenge.

It has 2 folders, the `server` and the `client`, in order to have separation of concerns. In each folder there is a guide on how to run each sub-project.

## Stack

- nodejs with express
- react with redux
- sass for style

## Database

The project does not have a database, but it uses a JSON file to keep track of the user changes.

## Testing

The testing for this project is a bit limited.

In the backend there are some unit tests to cover the logic, however there is no test coverage on routes.

In the frontend there is only type checking for the components that have props. Ideally it should have component unit testing with snapshot tests.

## Limitations

### User log in

When the user refreshes the page, the state is lost. So the app will log off the user.

### Lack of routing in front end

Because there is no routing, it is not possible to "go back" on a user journey, unless a refresh is done.

## Improvemnts

To improve of this project I would start working on upping the test coverage.

Afterwards, work on the frontend routing with some session variables to keep state for logged in users.
