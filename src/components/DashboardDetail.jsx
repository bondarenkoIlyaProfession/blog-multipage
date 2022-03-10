import React from 'react';

import dashboardDetail from "../assets/images/dashboardDetail.png";
import car from "../assets/images/car.png";
import dashboardDetail2 from "../assets/images/dashboardDetail2.png";

export const DashboardDetail = () => {
  return (
    <section className="dashboard-detail">
      <div className="container">
        <h1 className="dashboard-detail__title">Designing Dashboards with usability in mind</h1>
        <div className="dashboard-detail__info">
          <div className="dashboard-detail__date">2020</div>
          <div className="dashboard-detail__topic">Dashboard, User Experience Design</div>
        </div>
        <div className="dashboard-detail__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </div>
        <div className="dashboard-detail__img">
          <img src={dashboardDetail} alt="Dashboard Detail" />
        </div>
        <div className="dashboard-detail__heading-one">Heading 1</div>
        <div className="dashboard-detail__heading-two">Heading 2</div>
        <div className="dashboard-detail__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        <div className="dashboard-detail__img">
          <img src={car} alt="Dashboard Detail" />
        </div>
        <div className="dashboard-detail__img">
          <img src={dashboardDetail2} alt="Dashboard Detail" />
        </div>
      </div>
    </section>
  )
}