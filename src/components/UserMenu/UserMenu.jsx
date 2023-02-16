import React from "react";
import { RxExit } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { signOutFromGoogle } from "../../Firebase/firebase";
import { signOut } from "../../redux/slices/authSlice";
import "./UserMenu.css";

const UserMenu = ({ setToggleUserMenu }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOutFromGoogle();
    dispatch(signOut());
    sessionStorage.clear();
    setToggleUserMenu(false);
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="UserMenu">
      <div className="UserMenu__header">
        <img src={user?.photo} alt="" />
        <span>{user?.name}</span>
      </div>
      <div className="UserMenu__account-settings">
        <div onClick={handleSignOut}>
          <RxExit className="icon" />
          <span>Salir</span>
        </div>
      </div>
    </div>
  );
};

export { UserMenu };
