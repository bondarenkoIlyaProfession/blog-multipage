import React from "react";

import portrait from "../assets/images/portrait.png";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about__text">
            <h1 className="about__title">
              Hi, I am John, Creative Technologist
            </h1>
            <div className="about__description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
            <a href="#top" className="about__link">
              Download Resume
            </a>
          </div>

          <div className="about__img">
            <img src={portrait} alt="My Portrait" title="My Portrait" />
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}