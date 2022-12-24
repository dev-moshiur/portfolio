import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className='about'>
      <h1> <span>about</span> me </h1>

<div class="row">

    <div class="info">
        <h3> <span> name : </span> Moshiur Rahman  </h3>
        <h3> <span> age : </span> 19 </h3>
        
        <h3> <span> post : </span>Mern Stack Developer</h3>
        <h3> <span> language : </span> Bangla</h3>
        <a href="#"><button class="btn"> download CV <i class="fas fa-download"></i> </button></a>
    </div>

    <div className="counter">

        <div className="box">
            <span>2+</span>
            <h3>years of experience</h3>
        </div>

        <div className="box">
            <span>100+</span>
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
