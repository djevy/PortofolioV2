import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  // const [scrollState, setScrollState] = useState("top");

  // useEffect(() => {
  //   let listener = null;
  //   listener = document.addEventListener("scroll", (e) => {
  //     var scrolled = document.scrollingElement.scrollTop;
  //     if (scrolled >= 50) {
  //       if (scrollState !== "amir") {
  //         setScrollState("amir");
  //       }
  //     } else {
  //       if (scrollState !== "top") {
  //         setScrollState("top");
  //       }
  //     }
  //   });
  //   return () => {
  //     document.removeEventListener("scroll", listener);
  //   };
  // }, [scrollState]);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log(visible);
    setVisible(false);
  };

  return (
    <section id="navbar">
      <Modal
        title="Contact me"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form action="../contact_page.php" id="contactForm" method="post">
          <div>
            <label htmlFor="fname">
              First Name: <span className="error"></span>
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              placeholder="Your first name.."
              required
            />
          </div>

          <div>
            <label htmlFor="lname">
              Last Name: <span className="error"></span>
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              placeholder="Your last name.."
              required
            />
          </div>

          <div>
            <label htmlFor="email">
              Email: <span className="error"></span>
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="example@email.co.uk"
            />
          </div>

          <div>
            <label htmlFor="message">Message: </label>
            <textarea
              id="message"
              className="form-control"
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <button
            type="button"
            id="submitBtn"
            className="btn btn-primary"
            aria-label="Close"
            data-dismiss="modal"
          >
            Submit
          </button>
        </form>
      </Modal>

      <div id="mobile">
        <nav
          className="navBar"
          // style={{
          //   backgroundColor:
          //     scrollState === "top" ? "black" : "rgb(19, 19, 19)",
          // }}
        >
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
            <p className="Link" onClick={showModal}>
              Contact Me
            </p>
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
          <p onClick={showModal}>Contact Me</p>
        </div>
      </div>
    </section>
  );
};
