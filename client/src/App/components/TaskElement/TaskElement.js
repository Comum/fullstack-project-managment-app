import React from "react";

import "./TaskElement.scss";

const TaskElement = ({ id, name, completedTime }) => {
  return (
    <li className="task-element">
      {!completedTime && <input type="checkbox" />}
      {!!completedTime && <span>&#10004;</span>}
      <div className="task-element-name">{name}</div>
    </li>
  );
};

export default TaskElement;
