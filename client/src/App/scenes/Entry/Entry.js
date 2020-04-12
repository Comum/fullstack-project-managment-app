import React from "react";
import { useDispatch } from "react-redux";

import { changeContent } from "../../state/actions/state-actions";

import { LOGIN, REGISTER } from "../../constants/constants";

import "./Entry.scss";

const Entry = () => {
  const dispatch = useDispatch();

  const onClickButton = (newContent) => {
    dispatch(changeContent(newContent));
  };

  return (
    <div className="entry-container">
      <div className="entry-options">
        <button
          className="entry-option-button"
          onClick={() => {
            onClickButton(LOGIN);
          }}
        >
          Login
        </button>
        <button
          className="entry-option-button"
          onClick={() => {
            onClickButton(REGISTER);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Entry;
