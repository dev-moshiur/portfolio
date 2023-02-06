import "./portfolio.scss";
import React,{useEffect} from "react";
import { GitHub, Tab } from "@material-ui/icons";

import AOS from 'aos';
import 'aos/dist/aos.css';
import projectImage from "./projectImage.jpg";
import khs from "./khs.png";
import ecommerce from "./ecommerce.png";
import seba from "./seba.png";
import ReactQuizeApp from "./ReactQuizeApp.png";

export default function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, [])
  const imgSrc = projectImage;

  const projects = [
    {
      name: "Khalshi High School",
      title: "a school management web app",
      img: khs,
      live: `https://school-management-beta.vercel.app`,
      frontend: `https://github.com/dev-moshiur/school-management.git`,
      backend: `https://github.com/dev-moshiur/school-management-api`,
    },
    {
      name: "Dream Fashion House",
      title: "a ecommerce web app",
      img: ecommerce,
      live: "https://e-commerce-liard-mu.vercel.app/",
      frontend: "https://github.com/dev-moshiur/E-commerce",
      backend: "",
    },
    {
      name: "Quiz Master",
      title: "a quiz web app",
      img: ReactQuizeApp,
      live: `https://quiz-master-tau.vercel.app/`,
      frontend: `https://github.com/dev-moshiur/quiz-master`,
      backend: `https://github.com/dev-moshiur/quiz-app-api`,
    },
    {
      name: "Publish Result",
      title: "a result publishing web app",
      img: `https://www.site-shot.com/cached_image/dN8BAKY9Ee21XwJCrBEABA`,
      live: `https://result-admin.vercel.app`,
      frontend: `https://github.com/dev-moshiur/result-admin.git`,
      backend: `https://github.com/dev-moshiur/school-management-api`,
    },
    {
      name: "Doctors Portal",
      title: "a hospitals web app",
      img: seba,
      live: "https://doctors-portal-beta.vercel.app/",
      frontend: "https://github.com/dev-moshiur/doctors-portal",
      backend: "",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1 data-aos="zoom-in">
        My <span>Projects</span>
      </h1>
      <div className="boxContainer">
        {projects.map((item) => (
          <div className="boxs" data-aos="zoom-out-up">
            <div className="imgHolder">
              <img src={item.img} alt="" />
            </div>
            <div className="contentHolder">
              <span className="name">{item.name}</span>
              <span className="type">{item.title}</span>
            </div>
            <div className="links">
              {item.frontend && (
                <a href={item.frontend} target={"_blank"}>
                  <GitHub />
                  <span>Frontend</span>
                </a>
              )}
              {item.backend && (
                <a href={item.backend} target={"_blank"}>
                  <GitHub />
                  <span>Backend</span>
                </a>
              )}
              {item.live && (
                <a href={item.live} target={"_blank"}>
                  <Tab />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
