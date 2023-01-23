import { ArrowDownward } from "@material-ui/icons";
import React,{useEffect} from "react";
import "./about.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="about" id="about">
      <h1 data-aos="zoom-in">
        
        <span >about</span> me
      </h1>

      <div class="row" data-aos="zoom-in">
        <div class="info">
          <h3 >
            
            <span> Name : </span> Moshiur Rahman
          </h3>
          <h3>
            
            <span> Age : </span> 21
          </h3>

          <h3>
            
            <span> Post : </span>Mern Stack Developer
          </h3>
          <h3>
            
            <span> Language : </span> Bangla,English
          </h3>
          <a target={'_blank'} href="https://drive.google.com/file/d/1FRiBLKSkHLhGo4sNW1XSiR2Xb1-O0hWQ/view">
            
            View CV 
          </a>
        </div>

        <div className="counter" >
          <div className="box" data-aos="zoom-in">
            <span>2+</span>
            <h3>years of experience</h3>
          </div>

          <div className="box" data-aos="zoom-in">
            <span>50+</span>
            <h3>porject completed</h3>
          </div>

          

          <div className="box" data-aos="zoom-in">
            <span>2+</span>
            <h3>awards won</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
