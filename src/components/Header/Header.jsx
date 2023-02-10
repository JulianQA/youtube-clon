import React from "react";
import "./Header.css";
import logoIcon from "../../assets/imgs/youtube-logo.svg";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { BsMic, BsPlus } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { signInWithGoogle } from "../../Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess } from "../../redux/slices/authSlice";

const Header = ({ setToggleAsideBar, toggleAsideBar }) => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    dispatch(loginRequest());
    const res = await signInWithGoogle();

    dispatch(
      loginSuccess({
        accessToken: res.accessToken,
        user: {
          name: res.providerData[0].displayName,
          photo: res.providerData[0].photoURL,
        },
      })
    );
  };
  const user = useSelector((state) => state.auth.user);
  console.log(user);
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
          {!user ? (
            <div className="right__login" onClick={handleLogin}>
              <span>Acceder</span>
            </div>
          ) : (
            <img
              src={user?.photo}
              className="login__profile-photo"
              title={user?.name}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export { Header };
