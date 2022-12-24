import { EmailSharp, HomeSharp, Phone } from '@material-ui/icons';
import React from 'react';
import './contact.scss';

export default function Contact() {
  
  return (
    <div className='contact-me'>
     <h1><span>Contact</span> Me</h1>
      <div className='contactFormAndAddress'>
        <div className="address">
          <div><span className='addressName'><EmailSharp/><i>Email</i></span>masud42215639@gmail.com</div>
          <div><span className='addressName'><Phone/><i>Number</i></span>01725256642</div>
          <div><span className='addressName'><Phone/><i>Number</i></span>01885355627</div>
          <div><span className='addressName'><HomeSharp/><i>address</i></span>Nijpara, Birgonj, Dinajpur</div>
          

        </div>
        <form action="
        " className="contactForm">

          <input placeholder='your name..' type="text" name="name" id="name" />
          <input placeholder='your email' type="email" name="email" id="email" />
          <textarea placeholder='write a massage' name="massage" id="massage" rows={6}></textarea>
          <input id='send' type="submit" value="Send" />

        </form>


      </div>

     
    </div>
  )
}
