import { EmailSharp, HomeSharp, Phone } from "@material-ui/icons";
import React, { useRef, useState ,useEffect} from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, [])
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage("");

    emailjs
      .sendForm(
        "service_z5tlvwn",
        "template_4nbexqj",
        form.current,
        "ArZTB-tf-ymPvbz_g"
      )
      .then(
        (result) => {
          setMessage("Message sent successfully");
        },
        (error) => {
          setMessage("Something went wrong");
        }
      );
    form.current.reset();
  };

  return (
    <div className="contact-me" id="contact">
      <h1 data-aos="zoom-in">
        <span>Contact</span> Me
      </h1>
      <div className="contactFormAndAddress">
        <div className="address" >
          <div data-aos="zoom-in">
            <span className="addressName">
              <EmailSharp />
              <i>Email</i>
            </span>
            dev.moshiurr@gmail.com
          </div>
          <div data-aos="zoom-in">
            <span className="addressName">
              <Phone />
              <i>Number</i>
            </span>
            +880 1725256642
          </div>
          <div data-aos="zoom-in">
            <span className="addressName">
              <Phone />
              <i>Number</i>
            </span>
            +880 01885355627
          </div>
          <div data-aos="zoom-in">
            <span className="addressName">
              <HomeSharp />
              <i>address</i>
            </span>
            Nijpara, Birgonj, Dinajpur
          </div>
        </div>
        <form data-aos="zoom-in" ref={form} onSubmit={sendEmail} className="contactForm">
          <input placeholder="your name.." type="text" name="name" id="name" />
          <input
            placeholder="your email"
            type="email"
            name="email"
            id="email"
          />
          <textarea
            placeholder="write a massage"
            name="message"
            id="massage"
            rows={6}
          ></textarea>
          {message && <div className="status">{message}</div>}
          <input id="send" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
