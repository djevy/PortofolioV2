import "./About.scss";
import { FaHtml5, FaReact, FaCss3, FaJs,FaGitAlt, FaPhp  } from "react-icons/fa";
import { DiMysql, DiJqueryLogo } from "react-icons/di";
import { Tooltip } from 'antd';

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
            <Tooltip title="JavaScript" trigger="hover" className="skills"><FaJs className="icon"/></Tooltip>
            <Tooltip title="HTML-5" trigger="hover" className="skills"><FaHtml5 className="icon"/></Tooltip>
            <Tooltip title="Title" trigger="hover" className="skills"><FaCss3 className="icon"/></Tooltip>
            <Tooltip title="Title" trigger="hover" className="skills"><FaPhp className="icon"/></Tooltip>
            <Tooltip title="Title" trigger="hover" className="skills"><FaReact className="icon"/></Tooltip>
            <Tooltip title="Title" trigger="hover" className="skills"><DiMysql className="icon"/></Tooltip>
            <Tooltip title="Title" trigger="hover" className="skills"><FaGitAlt className="icon"/></Tooltip>
            <Tooltip title="Title" trigger="hover" className="skills"><DiJqueryLogo className="icon"/></Tooltip>
</div>

      </div>
    </section>
  );
};
