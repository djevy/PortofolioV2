import React from "react";
import "./Footer.scss";
import {
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  return (
    <div id="footer">
      <div>
        <h3>
          <span className="mobileHide">Developed by </span>Darren Evans
        </h3>
      </div>
      <div>
        <h3>
          <span className="mobileHide">Copyright</span> <CopyrightOutlined />{" "}
          2021
        </h3>
      </div>
      <div id="footerLogos">
        <a href="https://www.linkedin.com/in/darren-evans-061685157/">
          <GithubOutlined />
        </a>
        <a href="https://github.com/djevy/">
          <LinkedinFilled />
        </a>
        <a href="mailto:contact@darrenrevans.co.uk">
          <MailOutlined />
        </a>
      </div>
    </div>
  );
};
