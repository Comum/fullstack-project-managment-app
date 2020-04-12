import React, { useState } from "react";
import md5 from "md5";

import Container from "../../components/Container/Container";

import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeValue = (value, func) => {
    func(value);
  };
  const onFormSubmit = () => {
    const hashedPassword = md5(password);

    console.log(username);
    console.log(password);
    console.log(hashedPassword);
  };

  return (
    <Container>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        <ul className="login-form-list">
          <li className="login-form-item">
            <label className="login-form-item-label">Username</label>
            <input
              type="text"
              placeholder="username"
              className="login-form-item-input"
              onChange={(e) => {
                onChangeValue(e.target.value, setUsername);
              }}
            />
          </li>
          <li className="login-form-item">
            <label className="login-form-item-label">Password</label>
            <input
              type="password"
              className="login-form-item-input"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              onChange={(e) => {
                onChangeValue(e.target.value, setPassword);
              }}
            />
          </li>
          <li className="login-form-item">
            <input type="submit" value="Login" />
          </li>
        </ul>
      </form>
    </Container>
  );
};

export default Login;
