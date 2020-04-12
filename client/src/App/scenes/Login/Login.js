import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import md5 from "md5";

import { requestUserLogin } from "../../state/actions/user-actions";

import Container from "../../components/Container/Container";

import "./Login.scss";
import "../../common-styles/form.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const error = useSelector((state) => state.requestUserLogin.error);
  const dispatch = useDispatch();

  const onChangeValue = (value, func) => {
    func(value);
  };
  const onFormSubmit = () => {
    const hashedPassword = md5(password);

    dispatch(requestUserLogin(username, hashedPassword));
  };

  useEffect(() => {
    setErrorMsg(error);
  }, [error]);

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
          <li className="form-item">
            <div className="form-item-label">Username</div>
            <input
              type="text"
              placeholder="username"
              className="form-item-input"
              required
              onChange={(e) => {
                onChangeValue(e.target.value, setUsername);
              }}
            />
          </li>
          <li className="form-item">
            <div className="form-item-label">Password</div>
            <input
              type="password"
              className="form-item-input"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              required
              onChange={(e) => {
                onChangeValue(e.target.value, setPassword);
              }}
            />
          </li>
          <li className="form-item">
            <input type="submit" value="Login" />
          </li>
        </ul>
        {errorMsg && <div className="login-form-error">{errorMsg}</div>}
      </form>
    </Container>
  );
};

export default Login;
