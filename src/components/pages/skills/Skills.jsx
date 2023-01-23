import React, { useEffect } from "react";
import "./skills.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, [])
  const data = [
    {
      skillId: "1",
      skillType: "Frontend",
      skillName: "HTML5",
      skillLavel: "intermediate",
      percent:95,
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "2",
      skillType: "Frontend",
      skillName: "CSS3",
      percent:90,
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "3",
      skillType: "Frontend",
      skillName: "SASS",
      percent:60,
      skillLavel: "Basic",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "4",
      skillType: "Frontend",
      skillName: "Bootstrap",
      skillLavel: "Basic",
      percent:65,
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },

    {
      skillId: "5",
      skillType: "Frontend",
      skillName: "Javascript",
      percent:88,
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "5",
      skillType: "Frontend",
      skillName: "Typescript",
      skillLavel: "Basic",
      percent:65,
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },

    {
      skillId: "6",
      skillType: "Frontend",

      skillName: "ReactJs",
      percent:85,
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "6",
      skillType: "Frontend",
      percent:75,

      skillName: "NextJs",
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "6",
      skillType: "Frontend",
      percent:70,

      skillName: "Redux",
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "1",
      skillType: "Backend",
      percent:70,

      skillName: "NodeJs",
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "2",
      skillType: "Backend",
      percent:85,

      skillName: "ExpressJs",
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "3",
      skillType: "Backend",
      percent:85,

      skillName: "MongoDB",
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
    {
      skillId: "4",
      skillType: "Backend",
      percent:90,

      skillName: "Mongoose",
      skillLavel: "Intermediate",
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },

    {
      skillId: "6",
      skillType: "Backend",
      skillName: "MySQL",
      skillLavel: "Intermediate",
      percent:95,
      skillDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!",
    },
  ];

  return (
    <div className="skills" id="skills">
      <h1 data-aos="zoom-in">
        
        My <span>Skills</span>
      </h1>

      <div class="box-container">
        {data.map((item, index) => (
          <div class="box" data-aos="zoom-in-up">
            <div className="top">
              <i>{index + 1}</i>
              <h3>{item.skillName}</h3>
              <span>{item.skillLavel}</span>
            </div>
            <div className="bottom">
              <div className="full" style={{width : `${item.percent}%`}}>
                <span>{`${item.percent}`}
                  </span>
                  <span>%</span>
                
              </div>
            </div>
            

            
          </div>
        ))}
      </div>
    </div>
  );
}
