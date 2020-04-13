import React from "react";
import PropTypes from "prop-types";

import "./Container.scss";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="container-box">{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Container;
