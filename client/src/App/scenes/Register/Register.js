import React, { useState } from "react";
import { useDispatch } from "react-redux";
import md5 from "md5";

import { requestUserRegister } from "../../state/actions/user-actions";

import Container from "../../components/Container/Container";

import "./Register.scss";
import "../../common-styles/form.scss";
import "../../common-styles/buttons.scss";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCompare, setPasswordCompare] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const onChangeValue = (value, func) => {
    func(value);
  };
  const onFormSubmit = () => {
    const hashedPassword = md5(password);

    if (password === passwordCompare) {
      dispatch(requestUserRegister(firstName, lastName, hashedPassword));
    } else {
      setErrorMsg("Passwords to not match");
    }
  };

  return (
    <Container>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        <ul className="form-list">
          <li className="form-item-flex">
            <div>
              <div className="form-item-label">First name</div>
              <input
                type="text"
                placeholder="first name"
                className="form-item-input"
                required
                onChange={(e) => {
                  onChangeValue(e.target.value, setFirstName);
                }}
              />
            </div>
            <div>
              <div className="form-item-label">Last name</div>
              <input
                type="text"
                placeholder="last name"
                className="form-item-input"
                required
                onChange={(e) => {
                  onChangeValue(e.target.value, setLastName);
                }}
              />
            </div>
          </li>
          <li className="form-item">
            <div className="form-item-label">Password</div>
            <input
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              className="form-item-input"
              required
              onChange={(e) => {
                onChangeValue(e.target.value, setPassword);
              }}
            />
          </li>
          <li className="form-item">
            <div className="form-item-label">Confirm password</div>
            <input
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              className="form-item-input"
              required
              onChange={(e) => {
                onChangeValue(e.target.value, setPasswordCompare);
              }}
            />
          </li>
          <li className="form-item">
            <input type="submit" value="Register" className="blue-button" />
          </li>
        </ul>
        {errorMsg && <div className="register-form-error">{errorMsg}</div>}
      </form>
    </Container>
  );
};

export default Register;
