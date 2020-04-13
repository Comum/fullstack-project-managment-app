import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { completeTask, deleteTask } from "../../state/actions/task-actions";
import { getFormatedDate } from "../../utils/utils";

import "./TaskElement.scss";

const TaskElement = ({ id, name, completedTime, projectId }) => {
  const dispatch = useDispatch();
  const formatedDate = getFormatedDate(completedTime);

  return (
    <li className="task-element">
      {!completedTime && (
        <input
          type="checkbox"
          onClick={() => {
            dispatch(completeTask(projectId, id));
          }}
        />
      )}
      {!!completedTime && <span>&#10004;</span>}
      <div className="task-element-name">
        {name}
        {!!completedTime && (
          <span className="task-element-completed-time">{formatedDate}</span>
        )}
      </div>
      {!completedTime && (
        <span
          className="task-element-close-button"
          onClick={() => {
            dispatch(deleteTask(projectId, id));
          }}
        >
          &#10005;
        </span>
      )}
    </li>
  );
};

TaskElement.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  completedTime: PropTypes.string,
  projectId: PropTypes.string.isRequired,
};

export default TaskElement;
