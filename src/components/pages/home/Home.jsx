import React from 'react'
import './home.scss'
import Img from './man.png';
import { Link } from "react-router-dom";

import { Facebook, GitHub, LinkedIn, MessageSharp, WhatsApp } from '@material-ui/icons';
export default function Home() {
  return (
    <div className='home' id='home'>
      <div className="content">

          <h3>HI THERE !</h3>
          <h3>Welcome To My Portfolio Website</h3>
          <span className='heading'>I'M <span className='name'>Moshiur Rahman</span></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt aspernatur fugiat minus enim ullam repudiandae sint sed magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.
          </p>
         <Link to='/about' className="btn">about me </Link>
        </div>
        <div className="imgAndIcon">
          <div className="img">
            <img src={Img} alt="" />
          </div>
          <div className="someLinks">
            <Facebook/>
            <LinkedIn/>
            <GitHub/>
            <MessageSharp/>
            <WhatsApp/>
          </div>

        </div>
    </div>
  )
}
