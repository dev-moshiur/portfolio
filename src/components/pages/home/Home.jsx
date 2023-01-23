import React ,{useEffect}from "react";
import "./home.scss";
import Img from "./best.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Facebook,
  GitHub,
  LinkedIn,
  MessageSharp,
  WhatsApp,
} from "@material-ui/icons";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="home" id="home">
      <div className="content">
        <h3 data-aos="fade-down-right">HI THERE !</h3>
        <h3 data-aos="fade-down-left">Welcome To My Portfolio Website</h3>
        <span className="heading" data-aos="fade-right">
          I'M <span className="name">Moshiur Rahman</span>
        </span>
        <p data-aos="zoom-in">
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
        <a href="#about" className="btn" data-aos="flip-up">
          about me
        </a>
      </div>
      <div className="imgAndIcon">
        <div data-aos="zoom-in-up" className="img">
          <img src={Img} alt="" />
        </div>
        <div className="someLinks" data-aos="flip-left">
          <a href="https://www.facebook.com/masudhasan.masudhasan.925/">
            <Facebook />
          </a>
          
          <a href="https://www.linkedin.com/in/moshiur-rahman-16a2b0243?fbclid=IwAR3m6xnRYZ2hgZM_GCdQhzZiUmDB-uNwoOp8_gfeB-qBzed7cWl0QkAi1Zo">
          <LinkedIn />
          </a>
          <a href="https://github.com/dev-moshiur">
          <GitHub />
          </a>
          
          
          

          
        </div>
      </div>
    </div>
  );
}
