import React, { useState, Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import LoadingElement from "./components/LoadingElement/LoadingElement";

import {
  CONTENT,
  ENTRY,
  LOGIN,
  REGISTER,
  SUCCESSFUL_REGISTER,
} from "./constants/constants";

import "./App.scss";

const Content = lazy(() => import("./scenes/Content/Content"));
const Entry = lazy(() => import("./scenes/Entry/Entry"));
const Login = lazy(() => import("./scenes/Login/Login"));
const Register = lazy(() => import("./scenes/Register/Register"));
const RegisterSucess = lazy(() =>
  import("./scenes/RegisterSucess/RegisterSucess")
);

function renderSwitch(content) {
  switch (content) {
    case ENTRY:
      return <Entry />;
    case LOGIN:
      return <Login />;
    case REGISTER:
      return <Register />;
    case SUCCESSFUL_REGISTER:
      return <RegisterSucess />;
    case CONTENT:
      return <Content />;
    default:
      return <LoadingElement />;
  }
}

function App() {
  const [content, setContent] = useState("entry");
  const [user, setUser] = useState("");
  const appContent = useSelector((state) => state.changeContent.content);
  const userIsLoggedIn = useSelector(
    (state) => state.requestUserLogin.isLoggedIn
  );
  const userFinishRegister = useSelector(
    (state) => state.requestUserRegister.isFinishRegister
  );
  const userFetched = useSelector((state) => state.requestUserLogin.user);

  useEffect(() => {
    setContent(appContent);
  }, [appContent]);

  useEffect(() => {
    setUser(userFetched);
  }, [userFetched]);

  useEffect(() => {
    if (userIsLoggedIn) {
      setContent(CONTENT);
    }
  }, [userIsLoggedIn]);

  useEffect(() => {
    if (userFinishRegister) {
      setContent(SUCCESSFUL_REGISTER);
    }
  }, [userFinishRegister]);

  return (
    <div className="app-main">
      <Header user={user} />
      <div className="app-content">
        <Suspense fallback={<LoadingElement />}>
          {renderSwitch(content)}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
