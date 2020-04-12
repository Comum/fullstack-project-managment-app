import { CHANGE_CONTENT } from "../constants/state-constants";

export const changeContent = (newState) => ({
  type: CHANGE_CONTENT,
  payload: newState,
});
