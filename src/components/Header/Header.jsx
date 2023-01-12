import React from "react";
import "./Header.css";
import logoIcon from "../../assets/imgs/youtube-logo.svg";
import menuIcon from "../../assets/icons/menu.svg";
import searchIcon from "../../assets/icons/search.svg";
import micIcon from "../../assets/icons/mic.svg";
import addIcon from "../../assets/icons/add.svg";
import notificationsIcon from "../../assets/icons/notifications.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav__left">
          <figure className="left__burger">
            <img src={menuIcon} alt="" className="icon icon--white" />
          </figure>
          <div className="left__logo">
            <img src={logoIcon} alt="" />
          </div>
        </div>
        <div className="nav__center">
          <div className="search-container">
            <input type="text" placeholder="Buscar" />
            <figure>
              <img src={searchIcon} alt="" className="icon icon-search" />
            </figure>
          </div>
          <figure className="mic-container">
            <img src={micIcon} alt="" className="icon icon-mic icon--white" />
          </figure>
        </div>
        <div className="nav__right">
          <img src={addIcon} alt="" className="icon add-icon icon--white" />
          <img
            src={notificationsIcon}
            alt=""
            className="icon nots-icon icon--white"
          />
          <div className="right__login">
            <span>Acceder</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
