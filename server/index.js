const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const USERS_FILE = "./database/users.json";
const { generateUserName, isUserInList } = require("./utils/utils");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// users routes
app.post("/users", (request, response) => {
  const { firstName, lastName, password } = request.body;
  const userName = generateUserName(firstName, lastName);
  const userRaw = fs.readFileSync(USERS_FILE);
  const users = JSON.parse(userRaw);
  const userInList = isUserInList(userName, users);

  if (userInList) {
    response.send({ status: "error", errMsg: "User already exists." });
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
          return console.log(err);
        } else {
          response.send({ status: "ok", errMsg: "User added to database." });
        }
      }
    );
  }
});

app.listen(8001, () => {
  console.log("App listening on port 8001!");
});
