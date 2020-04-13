import {
  ADD_NEW_ADD_PENDING,
  ADD_NEW_ADD_SUCCESS,
  ADD_NEW_ADD_FAILED,
  CHANGE_TASK_UPDATED_FLAG,
} from "../constants/task-constants";

const initialAddNewTask = {
  taskUpdated: false,
  isPending: false,
};

export const addNewTask = (state = initialAddNewTask, action = {}) => {
  switch (action.type) {
    case ADD_NEW_ADD_PENDING:
      return { ...state, isPending: true };
    case ADD_NEW_ADD_SUCCESS:
      return {
        ...state,
        taskUpdated: true,
        isPending: false,
      };
    case ADD_NEW_ADD_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message,
        isPending: false,
      };
    case CHANGE_TASK_UPDATED_FLAG:
      return {
        ...state,
        taskUpdated: false,
      };
    default:
      return { ...state };
  }
};
