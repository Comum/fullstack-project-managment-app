const fs = require("fs");

const { USERS_FILE, PROJECTS_FILE } = require("../constants/constants");

const generateUserName = (firstName, lastName) => {
  return `${lastName.toLowerCase()}${firstName.charAt(0).toLowerCase()}`;
};

const getFilesContent = (filename) => {
  const infoRaw = fs.readFileSync(filename);

  return JSON.parse(infoRaw);
};

const isUserPresentInList = (users, userName, password = null) => {
  const usersLength = users.length;
  let userExists = false;
  let i;

  for (i = 0; i < usersLength; i++) {
    if (users[i].userName === userName) {
      if ((password && users[i].password === password) || !password) {
        userExists = true;
        break;
      }
    }
  }

  return userExists;
};

const getUserInfo = (list, userName) => {
  const listLength = list.length;
  let user = {};
  let i;

  for (i = 0; i < listLength; i++) {
    if (list[i].userName === userName) {
      user = list[i];
      break;
    }
  }

  return user;
};

const filterArrayOfObjectsByProperty = (
  list,
  value,
  property,
  inverted = false
) => {
  if (inverted) {
    return list.filter((project) => project[property] !== value);
  }
  return list.filter((project) => project[property] === value);
};

const generateProjectId = (firstName, lastName) => {
  const date = new Date();

  return `${firstName.charAt(0).toLowerCase()}${lastName
    .charAt(0)
    .toLowerCase()}-${date.getTime()}`;
};

const generateTaskId = (tasks) => {
  const tasksLength = tasks.length;

  return tasksLength > 0 ? tasks[tasksLength - 1].id + 1 : 0;
};

const getArrayIndex = (list, value, property) => {
  const listLength = list.length;

  if (listLength === 0) {
    return -1;
  }

  let i;

  for (i = 0; i < listLength; i++) {
    if (list[i][property] === value) {
      break;
    }
  }

  return i;
};

module.exports = {
  filterArrayOfObjectsByProperty,
  generateProjectId,
  generateTaskId,
  generateUserName,
  getArrayIndex,
  getFilesContent,
  getUserInfo,
  isUserPresentInList,
};
