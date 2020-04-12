import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateProjectList } from "../../state/actions/projects-actions";

import NewProject from "../../components/NewProject/NewProject";

import "./Content.scss";

const Content = () => {
  const shouldRequestProjectList = useSelector(
    (state) => state.requestNewProject.updateProjectList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldRequestProjectList) {
      // dispatch fetch of new projects
      dispatch(updateProjectList());
    }
  }, [dispatch, shouldRequestProjectList]);

  return (
    <ul className="content-container">
      <li className="content-container-item">
        <NewProject />
      </li>
    </ul>
  );
};

export default Content;
