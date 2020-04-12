import React from "react";

import "./Entry.scss";

const Entry = () => {
  return (
    <div className="entry-container">
      <div className="entry-options">
        <button className="entry-option-button">Login</button>
        <button className="entry-option-button">Register</button>
      </div>
    </div>
  );
};

export default Entry;
