import axios from "axios";

import { API_URL } from "../../constants/constants";
import {
  ADD_NEW_ADD_PENDING,
  ADD_NEW_ADD_SUCCESS,
  ADD_NEW_ADD_FAILED,
  CHANGE_TASK_UPDATED_FLAG,
} from "../constants/task-constants";

export const addNewTask = (projectId, taskName) => (dispatch) => {
  dispatch({ type: ADD_NEW_ADD_PENDING });
  axios({
    method: "post",
    url: `${API_URL}/tasks`,
    headers: {},
    data: { projectId: projectId, taskName: taskName },
  })
    .then(({ data }) =>
      dispatch({
        type: ADD_NEW_ADD_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ADD_NEW_ADD_FAILED,
        payload: error,
      })
    );
};

export const changeTaskUpdateFlag = () => ({
  type: CHANGE_TASK_UPDATED_FLAG,
  payload: null,
});
