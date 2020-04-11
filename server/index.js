const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const {
  isUserPresentInList,
  generateUserName,
  getFilesContent,
  getUserInfo,
  getUserProjects,
} = require("./utils/utils");

const USERS_FILE = "./database/users.json";
const PROJECTS_FILE = "./database/projects.json";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// users routes
app.post(
  "/users",
  asyncHandler(async (request, response) => {
    const { firstName, lastName, password } = request.body;
    const userName = generateUserName(firstName, lastName);
    const users = getFilesContent(USERS_FILE);
    const userInList = isUserPresentInList(users, userName);

    if (userInList) {
      throw createError(400, "User already exists.");
    } else {
      const updatedUsers = [
        ...users,
        {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
        },
      ];

      fs.writeFile(
        USERS_FILE,
        JSON.stringify(updatedUsers, null, 2),
        function writeJSON(err) {
          if (err) {
            return err;
          } else {
            response.send({ status: 200, msg: "User added to database." });
          }
        }
      );
    }
  })
);
app.get(
  "/users",
  asyncHandler(async (request, response) => {
    const { userName, password } = request.body;
    const users = getFilesContent(USERS_FILE);
    const correctUserLogin = isUserPresentInList(users, userName, password);

    if (!correctUserLogin) {
      throw createError(401, "User login incorrect.");
    } else {
      const { firstName, lastName } = getUserInfo(users, userName);

      response.send({
        status: 200,
        userName: userName,
        firstName: firstName,
        lastName: lastName,
      });
    }
  })
);

// projects routes
app.get(
  "/projects",
  asyncHandler(async (request, response) => {
    const { userName } = request.body;
    const projects = getFilesContent(PROJECTS_FILE);
    const userProjects = getUserProjects(projects, userName);

    response.send({
      status: 200,
      userProjects: userProjects,
    });
  })
);

app.use((error, request, response, next) => {
  response.status(error.status || 500);

  response.json({
    status: error.status,
    message: error.message,
  });
});

app.listen(8001, () => {
  console.log("App listening on port 8001!");
});
