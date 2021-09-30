import React, { useState, useEffect } from "react";
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

  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 50) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <section id="navbar">
      <div id="mobile">
      {/* <div id="mobile"> */}
        <nav className="navBar" style={{backgroundColor: scrollState === "top" ? "black" : "rgb(19, 19, 19)"}}>
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
            <Link to="/" onClick={() => closeMenu()}>
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
