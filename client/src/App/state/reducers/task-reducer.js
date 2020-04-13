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

const initialAddNewTask = {
  taskUpdated: false,
  isPending: false,
};

const initialCompleteTask = {
  taskCompleted: false,
  isPending: false,
};

const initialDeleteTask = {
  taskDeleted: false,
  isPending: false,
};

export const addNewTask = (state = initialAddNewTask, action = {}) => {
  switch (action.type) {
    case ADD_NEW_TASK_PENDING:
      return { ...state, isPending: true };
    case ADD_NEW_TASK_SUCCESS:
      return {
        ...state,
        taskUpdated: true,
        isPending: false,
      };
    case ADD_NEW_TASK_FAILED:
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

export const completeTask = (state = initialCompleteTask, action = {}) => {
  switch (action.type) {
    case COMPLETE_TASK_PENDING:
      return { ...state, isPending: true };
    case COMPLETE_TASK_SUCCESS:
      return {
        ...state,
        taskCompleted: true,
        isPending: false,
      };
    case COMPLETE_TASK_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message,
        isPending: false,
      };
    case CHANGE_COMPLETE_TASK_FLAG:
      return {
        ...state,
        taskCompleted: false,
      };
    default:
      return { ...state };
  }
};

export const deleteTask = (state = initialDeleteTask, action = {}) => {
  switch (action.type) {
    case DELETE_TASK_PENDING:
      return { ...state, isPending: true };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        taskDeleted: true,
        isPending: false,
      };
    case DELETE_TASK_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message,
        isPending: false,
      };
    case CHANGE_DELETE_TASK_FLAG:
      return {
        ...state,
        taskDeleted: false,
      };
    default:
      return { ...state };
  }
};
