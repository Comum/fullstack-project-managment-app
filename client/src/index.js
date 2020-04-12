import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import App from "./App/App";

import { changeContent } from "./App/state/reducers/state-reducers";
import {
  requestUserLogin,
  requestUserRegister,
} from "./App/state/reducers/user-reducers";
import {
  requestNewProject,
  requestAllProjects,
} from "./App/state/reducers/projects-reducers";

import "./index.scss";

const logger = createLogger();
const rootReducer = combineReducers({
  changeContent,
  requestUserLogin,
  requestUserRegister,
  requestNewProject,
  requestAllProjects,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
