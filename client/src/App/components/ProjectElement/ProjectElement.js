import React from "react";

import "./ProjectElement.scss";
import "../../common-styles/buttons.scss";

const ProjectElement = ({ name, id, tasks }) => {
  return (
    <div className="project-element-container">
      <div className="project-element-header">
        <span className="project-element-header-text">{name}</span>
        <span className="project-element-header-text project-element-header-text-cursor">
          &#10005;
        </span>
      </div>
      <div className="project-element-content">
        <div className="project-element-new-task">
          <form className="project-element-new-task-form">
            <input
              type="text"
              className="project-element-new-task-input"
              placeholder="New task"
              required
            />
            <input type="submit" className="green-button" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectElement;
