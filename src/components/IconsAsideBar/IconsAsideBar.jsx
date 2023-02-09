import React from "react";
import "./IconsAsideBar.css";

const IconsAsideBar = ({ icon, name }) => {
  return (
    <div className="IconAsideBar">
      <div className="IconAsideBar__icon">{icon}</div>
      <span>{name}</span>
    </div>
  );
};

export { IconsAsideBar };
