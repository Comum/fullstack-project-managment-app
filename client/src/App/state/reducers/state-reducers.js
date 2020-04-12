import { CHANGE_CONTENT } from "../constants/state-constants";
import { ENTRY } from "../../constants/constants";

const initialStateContent = {
  content: ENTRY,
};

export const changeContent = (state = initialStateContent, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTENT:
      return { ...state, content: action.payload };
    default:
      return { ...state };
  }
};
