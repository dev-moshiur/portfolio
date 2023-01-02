import { ArrowDownward } from '@material-ui/icons';
import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className='about' id='about'>
      <h1> <span>about</span> me </h1>

<div class="row">

    <div class="info">
        <h3> <span> Name : </span> Moshiur Rahman  </h3>
        <h3> <span> Age : </span> 21 </h3>
        
        <h3> <span> Post : </span>Mern Stack Developer</h3>
        <h3> <span> Language : </span> Bangla,English</h3>
        <a href="#"> Download CV <ArrowDownward/></a>
    </div>

    <div className="counter">

        <div className="box">
            <span>2+</span>
            <h3>years of experience</h3>
        </div>

        <div className="box">
            <span>50+</span>
            <h3>porject completed</h3>
        </div>

        <div className="box">
            <span>430+</span>
            <h3>happy clients</h3>
        </div>

        <div className="box">
            <span>12+</span>
            <h3>awards won</h3>
        </div>

    </div>

</div>

    </div>
  )
}
