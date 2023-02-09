import React from "react";
import "./Header.css";
import logoIcon from "../../assets/imgs/youtube-logo.svg";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { BsMic, BsPlus } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ setToggleAsideBar, toggleAsideBar }) => {
  return (
    <header>
      <nav>
        <div className="nav__left">
          <figure className="left__burger">
            <RxHamburgerMenu
              className="icon icon--white"
              onClick={() => setToggleAsideBar(!toggleAsideBar)}
            />
          </figure>
          <div className="left__logo">
            <img src={logoIcon} alt="" />
          </div>
        </div>
        <div className="nav__center">
          <div className="search-container">
            <input type="text" placeholder="Buscar" />
            <figure>
              <AiOutlineSearch className="icon icon-search" />
            </figure>
          </div>
          <figure className="mic-container">
            <BsMic className="icon icon-mic icon--white" />
          </figure>
        </div>
        <div className="nav__right">
          <BsPlus className="icon add-icon icon--white" />
          <AiOutlineBell className="icon nots-icon icon--white" />
          <div className="right__login">
            <span>Acceder</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
