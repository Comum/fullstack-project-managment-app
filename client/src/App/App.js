import React, { useState, Suspense, lazy } from "react";

import Header from "./components/Header/Header";
import LoadingElement from "./components/LoadingElement/LoadingElement";

import "./App.scss";

const Content = lazy(() => import("./scenes/Content/Content"));
const Entry = lazy(() => import("./scenes/Entry/Entry"));
const Login = lazy(() => import("./scenes/Login/Login"));
const Register = lazy(() => import("./scenes/Register/Register"));

function renderSwitch(content) {
  switch (content) {
    case "entry":
      return <Entry />;
    case "login":
      return <Login />;
    case "register":
      return <Register />;
    case "content":
      return <Content />;
    default:
      return <LoadingElement />;
  }
}

function App() {
  const [content, setContent] = useState("entry");
  const [user, setUser] = useState("");

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
