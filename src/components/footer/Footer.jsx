import React from 'react';
import './footer.css';
import {GrInstagram} from 'react-icons/gr';
import {FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DIMAS RAMADHAN</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Porfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/dimas_rmdhan/"  target='_blank'><GrInstagram/></a>
        <a href="https://www.linkedin.com/in/dimasramadhan-dimas/" target='_blank'><FaLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dimas Ramadhan Profile. All rights reversed</small>
      </div>

    </footer>
  )
}

export default Footer