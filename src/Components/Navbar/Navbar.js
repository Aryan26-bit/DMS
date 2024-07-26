import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleNavbar,
  login,
  logout,
} from "./../../Slices/navbarComp/navbarSlice";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const isLoggedIn = useSelector((state) => state.navbar.isLoggedIn);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">Document Management System</div>
        <div className="navbar-toggle" onClick={() => dispatch(toggleNavbar())}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documents">
                Documents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documentview">
                Add New Document
              </Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li
                className="nav-item user-icon"
                onClick={() => dispatch(logout())}
              >
                <FaUser />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
