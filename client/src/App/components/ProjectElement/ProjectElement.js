import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TaskContainer from "../TaskContainer/TaskContainer";

import { addNewTask } from "../../state/actions/task-actions";
import { deleteProject } from "../../state/actions/projects-actions";

import "./ProjectElement.scss";
import "../../common-styles/buttons.scss";

const ProjectElement = ({ name, id, tasks }) => {
  const [taskName, setTaskName] = useState("");
  const incompleteTasks = [];
  const completeTasks = [];
  const dispatch = useDispatch();

  tasks.forEach((task) => {
    const { completedTime } = task;

    if (completedTime) {
      completeTasks.push(task);
    } else {
      incompleteTasks.push(task);
    }
  });

  const onChangeValue = (value, func) => {
    func(value);
  };
  const onFormSubmit = () => {
    dispatch(addNewTask(id, taskName));
  };

  return (
    <div className="project-element-container">
      <div className="project-element-header">
        <span className="project-element-header-text">{name}</span>
        <span
          className="project-element-header-text project-element-header-text-cursor"
          onClick={() => {
            dispatch(deleteProject(id));
          }}
        >
          &#10005;
        </span>
      </div>
      <div className="project-element-content">
        {incompleteTasks.length > 0 && (
          <TaskContainer label="To Do" tasks={incompleteTasks} projectId={id} />
        )}
        {completeTasks.length > 0 && (
          <TaskContainer label="Done" tasks={completeTasks} projectId={id} />
        )}
        <div className="project-element-new-task">
          <form
            className="project-element-new-task-form"
            onSubmit={(e) => {
              e.preventDefault();
              onFormSubmit();
            }}
          >
            <input
              type="text"
              className="project-element-new-task-input"
              placeholder="New task"
              required
              onChange={(e) => {
                onChangeValue(e.target.value, setTaskName);
              }}
            />
            <input type="submit" className="green-button" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectElement;
