
import './portfolio.scss';
import React from 'react';
import { GitHub,Tab } from '@material-ui/icons';

import projectImage from './projectImage.jpg'




export default function Portfolio() {
  const imgSrc = projectImage;

  const projects = [
    {
      name:'Khalshi High School',
      title:'a school management web app',
      img:imgSrc,
      live:`https://school-management-beta.vercel.app`,
      frontend:`https://github.com/dev-moshiur/school-management.git`,
      backend:`https://github.com/dev-moshiur/school-management-api`
    },
    {
      name:'Dream Fashion House',
      title:'a ecommerce web app',
      img:imgSrc,
      live:'',
      frontend:'',
      backend:''
    },
    {
      name:'Quiz Master',
      title:'a quiz web app',
      img:imgSrc,
      live:`https://quiz-mastar-beta.vercel.app`,
      frontend:`https://github.com/dev-moshiur/quiz-app-client`,
      backend:`https://github.com/dev-moshiur/quiz-app-api`
    },
    {
      name:'Doctors Portal',
      title:'a hospitals web app',
      img:imgSrc,
      live:'',
      frontend:'',
      backend:''
    }
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>My <span >Portfolio</span></h1>
      <div className='boxContainer'>
        {projects.map(item => <div className="boxs">
      <div className="imgHolder">
        <img src={item.img} alt="" />

      </div>
      <div className="contentHolder">
        <span className="name">
          {item.name}

        </span>
        <span className="type">
          {item.title}

        </span>
        

      </div>
      <div className="links">
        {item.frontend && <a href={item.frontend} target={'_blank'}>
          <GitHub/>
          <span>
            Frontend
          </span>
          </a>}
        {item.backend && <a href={item.backend} target={'_blank'}>
          <GitHub/>
          <span>Backend</span>
          </a>}
        {item.live && <a href={item.live} target={'_blank'}>
          <Tab/>
          <span>Live</span>
          </a>}
          

      </div>
     </div>)}
     
     
     
     
     </div>
    </div>
  )
}

