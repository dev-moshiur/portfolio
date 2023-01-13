import React from "react";
import "./home.scss";
import Img from "./best.png";
import { Link } from "react-router-dom";

import {
  Facebook,
  GitHub,
  LinkedIn,
  MessageSharp,
  WhatsApp,
} from "@material-ui/icons";
export default function Home() {
  return (
    <div className="home" id="home">
      <div className="content">
        <h3>HI THERE !</h3>
        <h3>Welcome To My Portfolio Website</h3>
        <span className="heading">
          I'M <span className="name">Moshiur Rahman</span>
        </span>
        <p>
          I am a Mern stack devaloper.
          From an early age I had always been interested in
          programming and after two years of hardwork, I converted my interest to skills.
          I am always interested in learning new technologies. I always ready
          to work hard and complete the assigned tasks within the allocated time
          maintaining the required standards. My key strengths are leadership
          experience, creativity, troubleshooting skills and quick problem solving 
          ability.I am passionate about React,Node .My goal is to acquire more knowledge and practical 
          experience.Having an excellent communication and negotiation skills,I am very interested to
          work with rumored worldwide organizations.
                   
        </p>
        <a href="#about" className="btn">
          about me{" "}
        </a>
      </div>
      <div className="imgAndIcon">
        <div className="img">
          <img src={Img} alt="" />
        </div>
        <div className="someLinks">
          <Facebook />
          <LinkedIn />
          <GitHub />

          <WhatsApp />
        </div>
      </div>
    </div>
  );
}
