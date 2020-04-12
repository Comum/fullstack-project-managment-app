import React from "react";

import NewProject from "../../components/NewProject/NewProject";

import "./Content.scss";

const Content = () => {
  return (
    <ul className="content-container">
      <li className="content-container-item">
        <NewProject />
      </li>
    </ul>
  );
};

export default Content;
