import React from "react";

import "./Header.scss";

const Header = ({ user }) => {
  return (
    <div className="header-container">
      <div className="header-text">EDirectInsure TODO List</div>
      <div className="header-text">{user}</div>
    </div>
  );
};

export default Header;
