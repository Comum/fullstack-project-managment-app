const fs = require("fs");

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

module.exports = {
  isUserPresentInList,
  generateUserName,
  getFilesContent,
  getUserInfo,
};
