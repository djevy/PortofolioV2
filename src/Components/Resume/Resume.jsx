import "./Resume.scss";
import React from "react";
import { saveAs } from "file-saver";
import CV from "../Media/Darren Evans CV-2021-October.pdf";

export const Resume = () => {
  const saveFile = () => {
    saveAs(CV, "Darren Evans CV.pdf");
  };

  return (
    <div id="Resume">
      <h2>Resume</h2>
      <button id="CVDownload" onClick={saveFile}>
        Download CV
      </button>

      <div className="experience">
        <h2>Experience</h2>
        <div>
          <h3>Front End Developer [ Zustech ]</h3>
          <h3>June 2021 - Present</h3>
          <ul>
            <li>Worked on the development of a Learning Management System.</li>
            <li>
              Translated designs and wireframes into a highly responsive user
              interface and reusable components using React.js.
            </li>
            <li>
              Used JIRA as a task tracking system to maintain the history
              of bugs/issues on an everyday basis.
            </li>
            <li>
              Created custom React Components, as well as worked with library
              Components to implement Backend-APIs.
            </li>
            <li>
              Worked on features such as:{" "}
              <ul>
                <li>Site wide language changing</li>
                <li>Secure login</li>
                <li>Payment handling</li>
                <li>Application submission</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <h2>Education</h2>
        <div>
          <h3>Web Development Career Path [ Codecademy ]</h3>
          <h3>2020</h3>
        </div>
        <div>
          <h3>BA East Asian Studies [ The University of Sheffield ]</h3>
          <h3>2014 - 2018</h3>
        </div>
        <div>
          <h3>Japanese Language Programme [ Sophia University, Tokyo ]</h3>
          <h3>2016 - 2017</h3>
        </div>
      </div>

      <div className="experience">
        <h2>Coding Traineeship</h2>
        <div>
          <h3>Full stack developer Traineeship [ IT Career Switch Ltd ]</h3>
          <h3>April 2020 - April 2021</h3>
          <p>
            During the traineeship I had to demonstrate a very competent level
            of the following programming languages and technical skills:
          </p>
          <ul>
            <li>HTML5, CSS3, JavaScript </li>
            <li>PHP, jQuery, SQL, Bootstrap</li>
            <li>Java, Python, React, C#</li>
            <li>Git, API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
