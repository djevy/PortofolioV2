import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <section id="navbar">
      <div id="mobile">
        <nav className="navBar">
          <div id="logo">
            <Link to="/" className="Link">
              <h1>DE</h1>
            </Link>
          </div>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <CloseOutlined id="closeBtn" />
            ) : (
              <MenuOutlined id="menuBtn" />
            )}
          </button>
          <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <Link
              to="/"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Home
            </Link>
            <Link to="/about" className="Link" onClick={() => closeMenu()}>
              About
            </Link>
            <Link to="/projects" className="Link" onClick={() => closeMenu()}>
              Projects
            </Link>
            <Link to="/resume" className="Link" onClick={() => closeMenu()}>
              Resume
            </Link>
            <p>Contact Me</p>
          </div>
        </nav>
      </div>
      <div id="desktop">
        <div id="logo">
          <Link to="/" className="Link">
            <h1>DE</h1>
          </Link>
        </div>
        <div id="links">
          <Link to="/" className="Link">
            Home
          </Link>
          <Link to="/about" className="Link">
            About
          </Link>
          <Link to="/projects" className="Link">
            Projects
          </Link>
          <Link to="/resume" className="Link">
            Resume
          </Link>
          <p>Contact Me</p>
        </div>
      </div>
    </section>
  );
};
