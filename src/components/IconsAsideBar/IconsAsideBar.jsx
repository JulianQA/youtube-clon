import React from "react";
import "./IconsAsideBar.css";

const IconsAsideBar = ({ icon, name }) => {
  return (
    <div className="IconAsideBar">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export { IconsAsideBar };
