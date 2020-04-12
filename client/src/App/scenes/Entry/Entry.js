import React from "react";
import { useDispatch } from "react-redux";

import Container from "../../components/Container/Container";

import { changeContent } from "../../state/actions/state-actions";

import { LOGIN, REGISTER } from "../../constants/constants";

import "./Entry.scss";

const Entry = () => {
  const dispatch = useDispatch();

  const onClickButton = (newContent) => {
    dispatch(changeContent(newContent));
  };

  return (
    <Container>
      <button
        className="entry-button"
        onClick={() => {
          onClickButton(LOGIN);
        }}
      >
        Login
      </button>
      <button
        className="entry-button"
        onClick={() => {
          onClickButton(REGISTER);
        }}
      >
        Register
      </button>
    </Container>
  );
};

export default Entry;
