import {
  REQUEST_USER_LOGIN_PENDING,
  REQUEST_USER_LOGIN_SUCCESS,
  REQUEST_USER_LOGIN_FAILED,
  REQUEST_USER_REGISTER_PENDING,
  REQUEST_USER_REGISTER_SUCCESS,
  REQUEST_USER_REGISTER_FAILED,
  UPDATE_FINISHED_REGISTER,
} from "../constants/user-constants";

const initialStateUser = {
  user: "",
  userName: "",
  isPending: false,
  isLoggedIn: false,
};

const initialStateRegister = {
  userName: "",
  isPending: false,
  isFinishRegister: false,
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

export const requestUserRegister = (
  state = initialStateRegister,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_USER_REGISTER_PENDING:
      return { ...state, isPending: true };
    case REQUEST_USER_REGISTER_SUCCESS:
      const { userName } = action.payload;

      return {
        ...state,
        userName: userName,
        isFinishRegister: true,
        isPending: false,
      };
    case REQUEST_USER_REGISTER_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message,
        isPending: false,
      };
    case UPDATE_FINISHED_REGISTER:
      return {
        ...state,
        isFinishRegister: false,
      };
    default:
      return { ...state };
  }
};
