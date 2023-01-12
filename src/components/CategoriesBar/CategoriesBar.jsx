import React from "react";
import "./CategoriesBar.css";
const CategoriesBar = () => {
  return (
    <div className="CategoriesBar">
      {categories.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};
const categories = [
  "Todos",
  "Videojuegos",
  "Clash Royale",
  "Valorant",
  "Tom Clancy's Rainbow Six: Siege",
  "Mixes",
  "En tiempo real",
  "Música",
  "Red Dead",
  "Grand Theft Auto V",
  "Call of Duty: Warzone 2.0",
  "FIFA",
];
export { CategoriesBar };
