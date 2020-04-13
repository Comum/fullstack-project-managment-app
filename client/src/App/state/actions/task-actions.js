import axios from "axios";

import { API_URL } from "../../constants/constants";
import {
  ADD_NEW_TASK_PENDING,
  ADD_NEW_TASK_SUCCESS,
  ADD_NEW_TASK_FAILED,
  CHANGE_TASK_UPDATED_FLAG,
  COMPLETE_TASK_PENDING,
  COMPLETE_TASK_SUCCESS,
  COMPLETE_TASK_FAILED,
  CHANGE_COMPLETE_TASK_FLAG,
  DELETE_TASK_PENDING,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
  CHANGE_DELETE_TASK_FLAG,
} from "../constants/task-constants";

export const addNewTask = (projectId, taskName) => (dispatch) => {
  dispatch({ type: ADD_NEW_TASK_PENDING });
  axios({
    method: "post",
    url: `${API_URL}/tasks`,
    headers: {},
    data: { projectId: projectId, taskName: taskName },
  })
    .then(({ data }) =>
      dispatch({
        type: ADD_NEW_TASK_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ADD_NEW_TASK_FAILED,
        payload: error,
      })
    );
};

export const changeTaskUpdateFlag = () => ({
  type: CHANGE_TASK_UPDATED_FLAG,
  payload: null,
});

export const completeTask = (projectId, taskId) => (dispatch) => {
  dispatch({ type: COMPLETE_TASK_PENDING });
  axios({
    method: "patch",
    url: `${API_URL}/tasks`,
    headers: {},
    data: { projectId: projectId, taskId: taskId },
  })
    .then(({ data }) =>
      dispatch({
        type: COMPLETE_TASK_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: COMPLETE_TASK_FAILED,
        payload: error,
      })
    );
};

export const changeCompleteTaskFlag = () => ({
  type: CHANGE_COMPLETE_TASK_FLAG,
  payload: null,
});

export const deleteTask = (projectId, taskId) => (dispatch) => {
  dispatch({ type: DELETE_TASK_PENDING });
  axios({
    method: "delete",
    url: `${API_URL}/tasks`,
    headers: {},
    data: { projectId: projectId, taskId: taskId },
  })
    .then(({ data }) =>
      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: DELETE_TASK_FAILED,
        payload: error,
      })
    );
};

export const changeDeleteTaskFlag = () => ({
  type: CHANGE_DELETE_TASK_FLAG,
  payload: null,
});
