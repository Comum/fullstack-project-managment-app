import {
  REQUEST_NEW_PROJECT_PENDING,
  REQUEST_NEW_PROJECT_SUCCESS,
  REQUEST_NEW_PROJECT_FAILED,
  CHANGE_UPDATE_PROJECT_LIST,
  REQUEST_ALL_PROJECT_PENDING,
  REQUEST_ALL_PROJECT_SUCCESS,
  REQUEST_ALL_PROJECT_FAILED,
} from "../constants/projects-constants";

const initialStateNewProject = {
  updateProjectList: false,
  isPending: false,
};

const initialStateAllProjects = {
  projects: [],
  isPending: false,
};

export const requestNewProject = (
  state = initialStateNewProject,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_NEW_PROJECT_PENDING:
      return { ...state, isPending: true };
    case REQUEST_NEW_PROJECT_SUCCESS:
      return {
        ...state,
        updateProjectList: true,
        isPending: false,
      };
    case REQUEST_NEW_PROJECT_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message,
        isPending: false,
      };
    case CHANGE_UPDATE_PROJECT_LIST:
      return {
        ...state,
        updateProjectList: false,
      };
    default:
      return { ...state };
  }
};

export const requestAllProjects = (
  state = initialStateAllProjects,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_ALL_PROJECT_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ALL_PROJECT_SUCCESS:
      const { userProjects } = action.payload;

      return {
        ...state,
        projects: userProjects,
        isPending: false,
      };
    case REQUEST_ALL_PROJECT_FAILED:
      return {
        ...state,
        error: action.payload.response.data.message,
        isPending: false,
      };
    default:
      return { ...state };
  }
};
