import axios from "axios";

import { API_URL } from "../../constants/constants";
import {
  REQUEST_NEW_PROJECT_PENDING,
  REQUEST_NEW_PROJECT_SUCCESS,
  REQUEST_NEW_PROJECT_FAILED,
  CHANGE_UPDATE_PROJECT_LIST,
  REQUEST_ALL_PROJECT_PENDING,
  REQUEST_ALL_PROJECT_SUCCESS,
  REQUEST_ALL_PROJECT_FAILED,
  DELETE_PROJECT_PENDING,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILED,
  CHANGE_DELETE_PROJECT_FLAG,
} from "../constants/projects-constants";

export const requestNewProject = (projectName, userName) => (dispatch) => {
  dispatch({ type: REQUEST_NEW_PROJECT_PENDING });
  axios({
    method: "post",
    url: `${API_URL}/projects`,
    headers: {},
    data: { projectName: projectName, userName: userName },
  })
    .then(({ data }) =>
      dispatch({
        type: REQUEST_NEW_PROJECT_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_NEW_PROJECT_FAILED,
        payload: error,
      })
    );
};

export const changeProjectUpdateFlag = () => ({
  type: CHANGE_UPDATE_PROJECT_LIST,
  payload: null,
});

export const requestAllProjects = (userName) => (dispatch) => {
  dispatch({ type: REQUEST_ALL_PROJECT_PENDING });
  axios
    .get(`${API_URL}/projects?userName=${userName}`)
    .then(({ data }) =>
      dispatch({
        type: REQUEST_ALL_PROJECT_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_ALL_PROJECT_FAILED,
        payload: error,
      })
    );
};

export const deleteProject = (projectId) => (dispatch) => {
  dispatch({ type: DELETE_PROJECT_PENDING });
  axios({
    method: "delete",
    url: `${API_URL}/projects`,
    headers: {},
    data: { projectId: projectId },
  })
    .then(({ data }) =>
      dispatch({
        type: DELETE_PROJECT_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: DELETE_PROJECT_FAILED,
        payload: error,
      })
    );
};

export const changeDeleteProjectFlag = () => ({
  type: CHANGE_DELETE_PROJECT_FLAG,
  payload: null,
});
