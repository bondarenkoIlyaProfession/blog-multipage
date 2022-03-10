import React from 'react';
import { Link } from "react-router-dom";

import dashboard from "../assets/images/dashboard.png";
import illustration from "../assets/images/illustration.png";
import typography from "../assets/images/typography.png";
import components from "../assets/images/components.png";

export const Portfolio = () => {
  const portfolio = [
    {
      title: "Designing Dashboards",
      date: "2022",
      topic: "Dashboard",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: dashboard,
    },
    {
      title: "Vibrant Portraits of 2021",
      date: "2021",
      topic: "Illustration",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: illustration,
    },
    {
      title: "36 Days of Malayalam type",
      date: "2020",
      topic: "Typography",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: typography,
    },
    {
      title: "Components",
      date: "2018",
      topic: "Components, Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: components,
    },
  ]

  return (
    <section className="portfolio">
      <div className="container">
        <h1 className="portfolio__title">Works</h1>


        <ul className="portfolio__list">
          {portfolio && portfolio.map(({ title, date, topic, description, img }, index) => {
            return (
              <li className="list__item" key={index}>
                <Link className="list__link" to="/work-detail">
                  <div className="list__item_img">
                    <img src={img} alt="Work Preview" />
                  </div>

                  <div className="list__item_text">
                    <h4 className="list__item_title">{title}</h4>
                    <div className="list__item_info">
                      <div className="list__item_date">{date}</div>
                      <div className="list__item_topic">{topic}</div>
                    </div>
                    <div className="list__item_description">{description}</div>
                  </div>
                </Link>

                <div className="line"></div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}