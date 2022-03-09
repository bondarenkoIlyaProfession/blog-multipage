import React from "react";

import dashboard from "../assets/images/dashboard.png";
import illustration from "../assets/images/illustration.png";
import typography from "../assets/images/typography.png";

export const FeaturedWorks = () => {

  const featuredWorks = [
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
  ]

  return (
    <section className="featured-works">
      <div className="container">
        <div className="featured-works__title">Featured works</div>

        <ul className="featured-works__list">
          {featuredWorks && featuredWorks.map(({ title, date, topic, description, img }, index) => {
            return (
              <li className="list__item" key={index}>
                <a className="list__link" href="#top">
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
                </a>

                <div className="line"></div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}