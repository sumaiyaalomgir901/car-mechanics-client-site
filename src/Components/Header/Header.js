import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <div className="header">
      <div className="contain mx-auto">
        <div className="logo">
          <h1>Car Mechanics Center</h1>
        </div>
        <div className="menu">
          <NavLink
            className="text-decoration-none text-dark fw-bold fs-5 menu-item"
            to="/home"
          >
            Home
          </NavLink>

          <NavLink
            className="text-decoration-none text-dark fw-bold fs-5 menu-item"
            to="/services"
          >
            Service
          </NavLink>
          {user.email && (
            <NavLink
              className="text-decoration-none text-white fw-bold fs-5 menu-item"
              to=""
            >
              {user.displayName}
            </NavLink>
          )}

          {user.displayName ? (
            <NavLink
              onClick={handleLogOut}
              className="text-decoration-none text-dark fw-bold fs-5 menu-item"
              to=""
            >
              LogOut
            </NavLink>
          ) : (
            <NavLink
              className="text-decoration-none text-dark fw-bold fs-5 menu-item"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
