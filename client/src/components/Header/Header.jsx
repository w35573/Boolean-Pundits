import React, { useRef } from "react";

import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import {GiTeacher} from "react-icons/gi"

import profileImage from "../../assets/all-images/profile.png";

import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },

  {
    path: "/sponsor",
    display: "5 Point Program",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const { user } = useAuthContext();

  

  if (user) {
    if (user.role === "student") {
      navLinks.push({
        path: "/student",
        display: "Student"
      })
    } else if (user.role === "admin") {
      navLinks.push({
        path: "/admin",
        display: "Admin"
      })
    } else if(user.role === "volunteer") {
      navLinks.push({
        path: "/volunteer",
        display: "Volunteer"
      })
    }
  } else if (navLinks.some((link) => link.path === "/profile")) {
    navLinks.pop();
  }

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <GiTeacher></GiTeacher>
                  <span>Yasham</span>
                </Link>
              </h1>
            </div>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            {user && (
              <div className="header__top__right d-flex align-items-center gap-3">
                <div className="profile__image" >
                  <img src={profileImage} alt="profile" id="profile__image" />
                </div>
                {/* <span className="user-name">{user.email}</span> */}
              </div>
            )}

            {!user && (
              <div className="header__top__right d-flex align-items-center gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>

                <Link to="/signup" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Sign Up
                </Link>
              </div>
            )}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
