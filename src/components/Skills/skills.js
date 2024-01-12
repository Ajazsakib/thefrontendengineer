import React from "react";
import "./skills.css";
import htmlIcon from "../../assets/html.png";
import reactIcon from "../../assets/react.png";
import otherIcon from "../../assets/other.png";

const Skills = () =>
{
  return (
    <section id="skills">
      <span className="skillTitle">What I Do?</span>
      <span className="skillDesc">
        I am having 2 YoE in
        <span className="introName"> React Frontend</span> and 1 YoE in
        <span className="introName"> Web Design</span>. Currently working in
        <span className="introName"> Thoughtwin IT Solution Pvt. Ltd. </span>
        as
        <span className="introName"> React JS Developer</span>.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={reactIcon}
            alt="Java Backend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>React Frontend Development</h2>
            <p>
              JavaScript , React JS , Next JS , Redux Toolkit , TypeScript , HTML , CSS , Jira
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={htmlIcon}
            alt="React Frontend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>HTML5, CSS3, Bootstrap, Material UI, jQuery, Photoshop, Adobe XD</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={otherIcon} alt="Other" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Other</h2>
            <p>Node, Express, Mongo DB, React JS, MySQL, SQL, Data Structure and Algorithm, Frontend System Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
