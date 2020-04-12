import axios from "axios";

import { API_URL } from "../../constants/constants";
import {
  REQUEST_USER_LOGIN_PENDING,
  REQUEST_USER_LOGIN_SUCCESS,
  REQUEST_USER_LOGIN_FAILED,
  REQUEST_USER_REGISTER_PENDING,
  REQUEST_USER_REGISTER_SUCCESS,
  REQUEST_USER_REGISTER_FAILED,
  UPDATE_FINISHED_REGISTER,
} from "../constants/user-constants";

export const requestUserLogin = (userName, password) => (dispatch) => {
  dispatch({ type: REQUEST_USER_LOGIN_PENDING });
  axios({
    method: "post",
    url: `${API_URL}/login`,
    headers: {},
    data: { userName: userName, password: password },
  })
    .then(({ data }) =>
      dispatch({
        type: REQUEST_USER_LOGIN_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_USER_LOGIN_FAILED,
        payload: error,
      })
    );
};

export const requestUserRegister = (firstName, lastName, password) => (
  dispatch
) => {
  dispatch({ type: REQUEST_USER_REGISTER_PENDING });
  axios({
    method: "post",
    url: `${API_URL}/users`,
    headers: {},
    data: { firstName: firstName, lastName: lastName, password: password },
  })
    .then(({ data }) =>
      dispatch({
        type: REQUEST_USER_REGISTER_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_USER_REGISTER_FAILED,
        payload: error,
      })
    );
};

export const updateFinishedRegister = () => ({
  type: UPDATE_FINISHED_REGISTER,
  payload: null,
});
