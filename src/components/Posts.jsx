import React from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
  const posts = [
    {
      title: "UI Interactions of the week #3",
      date: "12 Feb 2022",
      topic: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
    },
    {
      title: "UI Interactions of the week #2",
      date: "5 Oct 2021",
      topic: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
    },
    {
      title: "UI Interactions of the week #1",
      date: "17 June 2020",
      topic: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
    },
    {
      title: "UI Interactions of the week #0",
      date: "25 May 2019",
      topic: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
    },
  ]

  return (
    <section className="posts">
      <div className="container">
        <h1 className="posts__title">Blog</h1>

        <ul className="posts__list">
          {posts && posts.map(({ title, date, topic, description }, index) => {
            return (
              <li className="list__item" key={index}>
                <Link className="list__link" to="/work-detail">
                  <h4 className="list__item_title">{title}</h4>
                  <div className="list__item_info">
                    <div className="list__item_date">{date}</div>
                    <div className="list__item_vertical-line vertical-line "></div>
                    <div className="list__item_topic">{topic}</div>
                  </div>
                  <div className="list__item_description">{description}</div>
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

