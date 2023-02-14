import React, { useState } from "react";
import "./Header.css";
import logoIcon from "../../assets/imgs/youtube-logo.svg";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { BsMic, BsPlus } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { signInWithGoogle } from "../../Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess } from "../../redux/slices/authSlice";
import { UserMenu } from "../UserMenu/UserMenu";

const Header = ({ setToggleAsideBar, toggleAsideBar }) => {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    dispatch(loginRequest());
    const response = await signInWithGoogle();
    const accessToken = response.accessToken;
    const user = {
      name: response.providerData[0].displayName,
      photo: response.providerData[0].photoURL,
    };

    dispatch(
      loginSuccess({
        accessToken: accessToken,
        user: user,
      })
    );
    localStorage.setItem("yt-accessToken", accessToken);
    localStorage.setItem("yt-userData", JSON.stringify(user));
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <header>
      <nav>
        <div className="nav__left">
          <figure className="left__burger">
            <RxHamburgerMenu
              className="header-icon icon--white"
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
              <AiOutlineSearch className="header-icon icon-search" />
            </figure>
          </div>
          <figure className="mic-container">
            <BsMic className="header-icon icon-mic icon--white" />
          </figure>
        </div>
        <div className="nav__right">
          <BsPlus className="header-icon add-icon icon--white" />
          <AiOutlineBell className="header-icon nots-icon icon--white" />
          {!user ? (
            <div className="right__login" onClick={handleLogin}>
              <span>Acceder</span>
            </div>
          ) : (
            <img
              src={user?.photo}
              className="login__profile-photo"
              title={user?.name}
              onClick={() => setToggleUserMenu(!toggleUserMenu)}
            />
          )}
        </div>
      </nav>
      {toggleUserMenu && user && (
        <UserMenu setToggleUserMenu={setToggleUserMenu} />
      )}
    </header>
  );
};

export { Header };
