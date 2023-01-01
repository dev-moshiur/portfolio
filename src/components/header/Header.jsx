import { NightsStay,WbSunny } from '@material-ui/icons';
import React ,{useState} from 'react';
import { Link } from "react-router-dom";



import './header.scss';
export default function Header() {
  const [day, setday] = useState(true);
  const [activeMenu, setactiveMenu] = useState(false)
  const changeDay=()=>{
    setday((preday)=>!preday);
    day==true? document.body.classList.add('active'):
               document.body.classList.remove('active');
    }
  const menuToggle=()=>{
    setactiveMenu((preactiveMenu)=>!preactiveMenu);
  }
 
  
  return (
    <>
    <div className='header'>
      <div className="wrapper">
        <div className="logo">Portfolio</div>
         
        <ul>
            <li onClick={()=>changeDay()}>{day==true? <NightsStay />:<WbSunny />}</li>       
            <li onClick={menuToggle} className={activeMenu?'menu activeMenu':'menu'}>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
      
      </div>
      
    </div>
    <div className={activeMenu? 'navBar navActive':'navBar'}>
    <a onClick={menuToggle} href="#home">Home</a>
    <a onClick={menuToggle} href="#about">About Me</a>
    <a onClick={menuToggle} href="#skills">My Skills</a>
    <a onClick={menuToggle} href="#portfolio">Portfolio</a>
    <a onClick={menuToggle} href="#contact">Contact Me</a>
    </div>
    </>
  )
}
