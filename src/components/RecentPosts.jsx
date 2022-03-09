import React from "react";

const recentPosts = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2022",
    topic: "Desing, Pattern",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },

  {
    title: "Creating pixel perfect icons in Figma",
    date: "9 March 2022",
    topic: "Figma, Icon Design",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
]

export const RecentPosts = () => {
  return (
    <section className="recent-posts">
      <div className="container">
        <div className="recent-posts__text">
          <div className="recent-posts__title">Recent Posts</div>
          <a className="recent-posts__link" href="#top">View all</a>
        </div>

        <ul className="recent-posts__list">
          {recentPosts && recentPosts.map(({ title, date, topic, description }, index) => {
            return (
              <li className="list__item" key={index}>
                <a className="list__link" href="#top">
                  <h4 className="list__item_title">{title}</h4>
                  <div className="list__item_info">
                    <div className="list__item_date">{date}</div>
                    <div className="list__item_vertical-line"></div>
                    <div className="list__item_topic">{topic}</div>
                  </div>
                  <div className="list__item_description">{description}</div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}