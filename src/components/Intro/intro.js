import React from "react";
import "./intro.css";
import btnImage from "../../assets/hireme.png";
import imgSaquib from "../../assets/saquib-image.png";

const Intro = () =>
{
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Saquib Ajaz</span>
          <br />
          Dedicated Frontend Engineer
        </span>
        <p className="introPara">
          Having in-depth knowledge of <span className="introName">JavaScript</span>{" "}
          and <span className="introName">React.js</span> Technology <br /> and
          total experience of <span className="introName">2.5+ Years</span> in the
          software industry.
        </p>
        <a href={`mailto:saquibajaz999@gmail.com`}>
          <button className="btn">
            <img src={btnImage} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </a>
      </div>
      <img src={imgSaquib} alt="Profile" className="bgImg" />
    </section>
  );
};

export default Intro;
