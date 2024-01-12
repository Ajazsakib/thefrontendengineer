import React from "react";
import "./achievements.css";
import { achievements } from "../../data/achievements";
import { projects } from "../../data/projects";
import vlcc from "../../assets/vlcc.png";
import tg from "../../assets/tg.png";
import buildPiper from "../../assets/buildpiper_logo.jpg";
import link from "../../assets/link.png"
const Achievements = () =>
{
  const formatImageProject = {
    vlcc,
    tg,
    buildPiper,
  }
  return (
    <section id="achievements">
      <h2 className="achievement-text">Projects</h2>

      <div className="achievement-row">
        {projects &&
          projects.map((project) => (
            <div
              className="my-achievement"
              key={projects.id}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <div className="img">
                <img src={formatImageProject[project.img]} alt={project.img} />
              </div>

              <div className="text">
                <a href={project.url}><img src={link} alt={link} />{project.url}</a>
              </div>


            </div>
          ))}
      </div>
    </section>
  );
};

export default Achievements;
