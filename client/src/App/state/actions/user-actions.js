import axios from "axios";

import { API_URL } from "../../constants/constants";
import {
  REQUEST_USER_LOGIN_PENDING,
  REQUEST_USER_LOGIN_SUCCESS,
  REQUEST_USER_LOGIN_FAILED,
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
