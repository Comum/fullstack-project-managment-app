const generateUserName = (firstName, lastName) => {
  return `${lastName.toLowerCase()}${firstName.charAt(0).toLowerCase()}`;
};

const isUserInList = (userName, users) => {
  const usersLength = users.length;
  let userExists = false;
  let i;

  for (i = 0; i < usersLength; i++) {
    if (users[i].userName === userName) {
      userExists = true;
      break;
    }
  }

  return userExists;
};

module.exports = { generateUserName, isUserInList };
