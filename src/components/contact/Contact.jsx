import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
import {ImInstagram} from 'react-icons/im';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // start emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x4si7u2', 'template_ahfy5v6', form.current, 'hb_8S3oUBGqKl1yMH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    e.target.reset()
  };
  // end emailjs

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dimasramadhan@gmail.com</h5>
            <a href="mailto:dimasramadhan@gmail.com" target='_blank' rel="noopener noreferrer">Send an Email</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Dimas Ramadhan</h5>
            <a href="https://api.whatsapp.com/send?phone=6289677655867" target='_blank' rel="noopener noreferrer">Send a Message</a>
          </article>

          <article className="contact__option">
            <ImInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@dimas_rmdhan</h5>
            <a href="https://www.instagram.com/dimas_rmdhan/" target='_blank' rel="noopener noreferrer">See a Profile</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact