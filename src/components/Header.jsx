import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className={(nav__link) => nav__link.isActive ? "nav__link nav__link-active" : "nav__link"}>Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/works" className={(nav__link) => nav__link.isActive ? "nav__link nav__link-active" : "nav__link"}>Works</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/blog" className={(nav__link) => nav__link.isActive ? "nav__link nav__link-active" : "nav__link"}>Blog</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className={(nav__link) => nav__link.isActive ? "nav__link nav__link-active" : "nav__link"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}