import "./About.scss";
import {
  FaHtml5,
  FaReact,
  FaCss3,
  FaJs,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import { DiMysql, DiJqueryLogo } from "react-icons/di";
import Tooltip from "rc-tooltip";
export const About = () => {
  return (
    <section id="about">
      <div id="aboutMe">
        <h2>About me</h2>
        <p>
          After spending two years living in Japan, and studying the language
          and culture working as an English teacher. I am now focusing my
          passion for language, on the universal language of code. My goal is to
          become a Full-stack Developer with a wide range of skills.
        </p>
        <p>
          I have skills in React, with great knowledge of HTML, CSS and
          JavaScript. I love creating beautifully clean and impactful websites.
        </p>
        <p>
          I work freelance, but also enjoying working in a team environment.
          After all, two heads are better than one!
        </p>
        <p>
          Working closely with clients is my top priority as to ensure each and
          every need is met, so I can create them the website of their dreams.
        </p>
        <p>
          I am always looking for an exciting new project to work on...so why
          wait? I look forward to working with you!
        </p>
      </div>

      <div id="skills">
        <h2>My Skillset</h2>
        <div id="grid">
          <Tooltip
            overlay={<div className="Tooltip">JavaScript</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaJs className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">HTML-5</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaHtml5 className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">CSS3</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaCss3 className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">PHP</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaPhp className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">React</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaReact className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">MySQL</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <DiMysql className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">Git</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaGitAlt className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">jQuery</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <DiJqueryLogo className="icon" />
            </div>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
