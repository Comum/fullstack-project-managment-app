import {
  REQUEST_USER_LOGIN_PENDING,
  REQUEST_USER_LOGIN_SUCCESS,
  REQUEST_USER_LOGIN_FAILED,
} from "../constants/user-constants";

const initialStateUser = {
  user: "",
  userName: "",
  isPending: false,
  isLoggedIn: false,
};

export const requestUserLogin = (state = initialStateUser, action = {}) => {
  switch (action.type) {
    case REQUEST_USER_LOGIN_PENDING:
      return { ...state, isPending: true };
    case REQUEST_USER_LOGIN_SUCCESS:
      const { userName, firstName, lastName } = action.payload;

      return {
        ...state,
        user: `${firstName} ${lastName}`,
        userName: userName,
        isPending: false,
        isLoggedIn: true,
      };
    case REQUEST_USER_LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message,
        isPending: false,
      };
    default:
      return { ...state };
  }
};
