import React from "react";

import "./NewProject.scss";
import "../../common-styles/buttons.scss";

const NewProject = () => {
  return (
    <form>
      <div className="new-project-container">
        <div className="new-project-item new-project-title">
          Create a new project
        </div>
        <input
          className="new-project-item new-project-input"
          type="text"
          placeholder="Project name"
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
