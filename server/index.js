const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const {
  filterArrayOfObjectsByProperty,
  generateProjectId,
  generateTaskId,
  generateUserName,
  getArrayIndex,
  getFilesContent,
  getUserInfo,
  isUserPresentInList,
} = require("./utils/utils");
const { USERS_FILE, PROJECTS_FILE } = require("./constants/constants");

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

// login routes
app.post(
  "/login",
  asyncHandler(async (request, response) => {
    console.log(request.body);
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
    const userProjects = filterArrayOfObjectsByProperty(
      projects,
      userName,
      "projectOwner"
    );

    response.send({
      status: 200,
      userProjects: userProjects,
    });
  })
);
app.post(
  "/projects",
  asyncHandler(async (request, response) => {
    const { projectName, userName } = request.body;
    const users = getFilesContent(USERS_FILE);
    const projects = getFilesContent(PROJECTS_FILE);
    const { firstName, lastName } = getUserInfo(users, userName);
    const projectId = generateProjectId(firstName, lastName);
    const updatedProjects = [
      ...projects,
      {
        projectId: projectId,
        projectOwner: userName,
        projectName: projectName,
        tasks: [],
      },
    ];

    fs.writeFile(
      PROJECTS_FILE,
      JSON.stringify(updatedProjects, null, 2),
      function writeJSON(err) {
        if (err) {
          return err;
        } else {
          response.send({ status: 200, msg: "Project added to database." });
        }
      }
    );
  })
);
app.delete(
  "/projects",
  asyncHandler(async (request, response) => {
    const { projectId } = request.body;
    const projects = getFilesContent(PROJECTS_FILE);
    const updatedProjects = filterArrayOfObjectsByProperty(
      projects,
      projectId,
      "projectId",
      true
    );

    fs.writeFile(
      PROJECTS_FILE,
      JSON.stringify(updatedProjects, null, 2),
      function writeJSON(err) {
        if (err) {
          return err;
        } else {
          response.send({ status: 200, msg: "Project removed from database." });
        }
      }
    );
  })
);

// tasks routes
app.post(
  "/tasks",
  asyncHandler(async (request, response) => {
    const { projectId, taskName } = request.body;
    const projects = getFilesContent(PROJECTS_FILE);
    const projectIndex = getArrayIndex(projects, projectId, "projectId");
    const taskId = generateTaskId(projects[projectIndex].tasks);
    const taskCreationDate = new Date();
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].tasks.push({
      taskId: taskId,
      taskName: taskName,
      createdTime: taskCreationDate,
      completedTime: null,
    });

    fs.writeFile(
      PROJECTS_FILE,
      JSON.stringify(updatedProjects, null, 2),
      function writeJSON(err) {
        if (err) {
          return err;
        } else {
          response.send({ status: 200, msg: "Task added to the database." });
        }
      }
    );
  })
);
app.patch(
  "/tasks",
  asyncHandler(async (request, response) => {
    const { projectId, taskId } = request.body;
    const projects = getFilesContent(PROJECTS_FILE);
    const projectIndex = getArrayIndex(projects, projectId, "projectId");
    const tasksList = projects[projectIndex].tasks;
    const taskIndex = getArrayIndex(tasksList, parseInt(taskId, 10), "taskId");
    const taskCompletionDate = new Date();
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].tasks[
      taskIndex
    ].completedTime = taskCompletionDate;

    fs.writeFile(
      PROJECTS_FILE,
      JSON.stringify(updatedProjects, null, 2),
      function writeJSON(err) {
        if (err) {
          return err;
        } else {
          response.send({ status: 200, msg: "Task updated." });
        }
      }
    );
  })
);
app.delete(
  "/tasks",
  asyncHandler(async (request, response) => {
    const { projectId, taskId } = request.body;
    const projects = getFilesContent(PROJECTS_FILE);
    const projectIndex = getArrayIndex(projects, projectId, "projectId");
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].tasks = filterArrayOfObjectsByProperty(
      updatedProjects[projectIndex].tasks,
      parseInt(taskId, 10),
      "taskId",
      true
    );

    fs.writeFile(
      PROJECTS_FILE,
      JSON.stringify(updatedProjects, null, 2),
      function writeJSON(err) {
        if (err) {
          return err;
        } else {
          response.send({ status: 200, msg: "Task deleted." });
        }
      }
    );
  })
);

// middleware
app.use((error, request, response, next) => {
  response.status(error.status || 500);

  response.json({
    status: error.status,
    message: error.message,
  });
});

let server = app.listen(8001, "0.0.0.0", () => {
  console.log(
    `API listening on http://${server.address().address}:${
      server.address().port
    }`
  );
});
