import React from "react";

import TaskElement from "../TaskElement/TaskElement";

import "./TaskContainer.scss";

const TaskContainer = ({ label, tasks, projectId }) => {
  const taskList = [];

  tasks.forEach(({ taskId, taskName, completedTime }) => {
    taskList.push(
      <TaskElement
        key={taskId}
        id={taskId}
        name={taskName}
        completedTime={completedTime}
        projectId={projectId}
      />
    );
  });

  return (
    <div>
      <div className="task-container-header">{label}</div>
      <ul className="task-container">{taskList}</ul>
    </div>
  );
};

export default TaskContainer;
