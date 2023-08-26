import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { FaFacebook, FaGooglePlus } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="top-header">
        <div className="container top-header-cts">
          <i>
            <FaFacebook size="20px" />
          </i>
          <i>
            <FaGooglePlus size="20px" />
          </i>
        </div>
      </div>
      <div className="container navbar-menu">
        <div className="logo">
          <h2>Football X</h2>
        </div>
        <div className="menu-item">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li>
              <NavLink to="/players">Players</NavLink>
            </li>
            <li>
              <NavLink to="/fixtures">Fixture</NavLink>
            </li>
            <li>
              <NavLink to="/point-table">Point Table</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/login">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
