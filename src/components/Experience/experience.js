import React from "react";
import "./experience.css";
import { experienceData, experienceStyles } from "../../data/experience";
import
{
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import ey from "../../assets/ey-logo.png";
import thoughtwin from "../../assets/thoughtwin.png"
import buildpiper from "../../assets/buildpiper_logo.png";
import codingBrains from "../../assets/codingBrains.png";

const Experience = () =>
{
  const formatedCompanyLogos = {
    thoughtwin,
    buildpiper,
    codingBrains,
  };

  const renderJobExperience = () =>
  {
    const { icon, content, arrowStyle } = experienceStyles;

    return experienceData.workExperience.map((job) => (
      <VerticalTimelineElement
        key={job.id}
        className="vertical-timeline-element-work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={job.date}
        iconStyle={icon}
        icon={
          <img
            className="timeline-logo"
            src={formatedCompanyLogos[job.companyLogo]}
            alt="icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">{job.jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
        <p className="vertical-timeline-element-other">{job.skills}</p>
      </VerticalTimelineElement>
    ));
  };

  const renderEducation = () =>
  {
    const { icon, content, arrowStyle } = experienceStyles;
    return experienceData.education.map((study) => (
      <VerticalTimelineElement
        key={study.id}
        className="vertical-timeline-element-work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={study.date}
        iconStyle={icon}
        icon={<img className="timeline-logo" src={study.icon} alt="icon" />}
      >
        <h3 className="vertical-timeline-element-title">{study.course}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {study.institution}
        </h4>
        <p className="vertical-timeline-element-other">{study.cgpa}</p>
      </VerticalTimelineElement>
    ));
  };

  return (
    <section id="experience">
      <h2 className="worksTitle">Work Experience & Education</h2>
      <div className="experience-container">
        <VerticalTimeline>
          {renderJobExperience()}
          {renderEducation()}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
