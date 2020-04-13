import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  changeProjectUpdateFlag,
  requestAllProjects,
} from "../../state/actions/projects-actions";
import { changeTaskUpdateFlag } from "../../state/actions/task-actions";

import NewProject from "../../components/NewProject/NewProject";
import ProjectElement from "../../components/ProjectElement/ProjectElement";

import "./Content.scss";

const Content = () => {
  const userName = useSelector((state) => state.requestUserLogin.userName);
  const requestProjectListOnProjectUpdate = useSelector(
    (state) => state.requestNewProject.updateProjectList
  );
  const requestProjectListOnTaskUpdate = useSelector(
    (state) => state.addNewTask.taskUpdated
  );
  const projectList = useSelector((state) => state.requestAllProjects.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (requestProjectListOnProjectUpdate) {
      dispatch(changeTaskUpdateFlag());
    }
    if (requestProjectListOnTaskUpdate) {
      dispatch(changeProjectUpdateFlag());
    }
    dispatch(requestAllProjects(userName));
  }, [
    dispatch,
    requestProjectListOnProjectUpdate,
    requestProjectListOnTaskUpdate,
    userName,
  ]);

  const getProjects = () => {
    let projectListItems = [];

    if (projectList.length > 0) {
      projectList.forEach(({ projectName, projectId, tasks }) => {
        projectListItems.push(
          <li className="content-container-item" key={projectId}>
            <ProjectElement name={projectName} id={projectId} tasks={tasks} />
          </li>
        );
      });
    }

    return projectListItems;
  };

  return (
    <ul className="content-container">
      {getProjects()}
      <li className="content-container-item">
        <NewProject />
      </li>
    </ul>
  );
};

export default Content;
