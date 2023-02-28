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
import { useNavigate } from "react-router-dom";

const Header = ({ setToggleAsideBar, toggleAsideBar }) => {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    sessionStorage.setItem("yt-accessToken", accessToken);
    sessionStorage.setItem("yt-userData", JSON.stringify(user));
  };
  const user = useSelector((state) => state.auth.user);
  const handleGoToHome = () => {
    navigate("/");
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    navigate(`/search/${valueSearch}`);
  };
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
          <div className="left__logo" onClick={handleGoToHome}>
            <img src={logoIcon} alt="YouTube" />
          </div>
        </div>
        <div className="nav__center">
          <form className="search-container" onSubmit={handleSumbit}>
            <input
              type="text"
              placeholder="Buscar"
              value={valueSearch || ""}
              onChange={(e) => setValueSearch(e.target.value)}
            />
            <button>
              <AiOutlineSearch className="header-icon icon-search" />
            </button>
          </form>
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
              alt={user?.name}
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
