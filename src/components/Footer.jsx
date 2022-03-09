import React from "react";

import fb from "../assets/images/fb.svg";
import insta from "../assets/images/insta.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";

const socialLinks = [
  { img: fb }, { img: insta }, { img: twitter }, { img: linkedin }
]

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-media">
        {socialLinks && socialLinks.map(({ img }) => {
          return (
            <li className="list">
              <a href="#top" className="list__item">
                <img src={img} alt="Social Link" className="list__img" />
              </a>
            </li>
          )
        })}
      </ul>

      <div className="copyright">Copyright  &copy;2020 All rights reserved </div>
    </footer>
  )
}