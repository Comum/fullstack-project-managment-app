import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestNewProject } from "../../state/actions/projects-actions";

import "./NewProject.scss";
import "../../common-styles/buttons.scss";

const NewProject = () => {
  const [projectName, setProjectName] = useState("");
  const userName = useSelector((state) => state.requestUserLogin.userName);
  const dispatch = useDispatch();

  const onChangeValue = (value, func) => {
    func(value);
  };
  const onFormSubmit = () => {
    dispatch(requestNewProject(projectName, userName));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit();
      }}
    >
      <div className="new-project-container">
        <div className="new-project-item new-project-title">
          Create a new project
        </div>
        <input
          className="new-project-item new-project-input"
          type="text"
          placeholder="Project name"
          required
          onChange={(e) => {
            onChangeValue(e.target.value, setProjectName);
          }}
        />
        <input
          className="new-project-item new-project-button blue-button"
          type="submit"
        />
      </div>
    </form>
  );
};

export default NewProject;
