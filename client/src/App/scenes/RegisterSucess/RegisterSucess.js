import React from "react";
import { useDispatch } from "react-redux";

import { updateFinishedRegister } from "../../state/actions/user-actions";
import { changeContent } from "../../state/actions/state-actions";

import { LOGIN } from "../../constants/constants";

import Container from "../../components/Container/Container";

import "../../common-styles/buttons.scss";

const RegisterSucess = ({ username }) => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(updateFinishedRegister());
    dispatch(changeContent(LOGIN));
  };

  return (
    <Container>
      <p>Registration successfull.</p>
      <p>Your username is: {username}</p>
      <button
        className="blue-button"
        onClick={() => {
          onButtonClick();
        }}
      >
        Login
      </button>
    </Container>
  );
};

export default RegisterSucess;
