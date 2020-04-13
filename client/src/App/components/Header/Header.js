import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";

const Header = ({ user }) => {
  return (
    <div className="header-container">
      <div className="header-text">EDirectInsure TODO List</div>
      <div className="header-text">{user}</div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Header;
