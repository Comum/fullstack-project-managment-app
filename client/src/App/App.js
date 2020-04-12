import React, { useState, Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import LoadingElement from "./components/LoadingElement/LoadingElement";

import { CONTENT, ENTRY, LOGIN, REGISTER } from "./constants/constants";

import "./App.scss";

const Content = lazy(() => import("./scenes/Content/Content"));
const Entry = lazy(() => import("./scenes/Entry/Entry"));
const Login = lazy(() => import("./scenes/Login/Login"));
const Register = lazy(() => import("./scenes/Register/Register"));

function renderSwitch(content) {
  switch (content) {
    case ENTRY:
      return <Entry />;
    case LOGIN:
      return <Login />;
    case REGISTER:
      return <Register />;
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

  useEffect(() => {
    setContent(appContent);
  }, [appContent]);

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
