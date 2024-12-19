import React from 'react'
import '../index.css'
import './Footer.css'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className='information'>
          <ul>
            <li className='address'>
              <a href="https://www.google.com/maps" target='blank'>
                <i className="fa-solid fa-location-dot"></i>
                77 Apex Lane, Nova City, TX 75001, USA
              </a>
            </li>
            <li className='phone-number'>
              <a href="tel:+555867-4309" target='blank'>
                <i className="fa-solid fa-phone"></i>
                (555) 867-4309
              </a>
            </li>
            <li className='email-link'>
              <a href="mailto:info@mechanomind.com" target='blank'>
                <i className="fa-solid fa-envelope"></i>
                info@meachanomind.com
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
        <div className='socials'>
          <a href="">
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </footer>
      <div className='copyright-div'>© 2024 Mechanomind. All rights reserved. <br /><br /> This project is created for learning purposes. All content is fictional and made up for demonstration purposes.</div>
    </>
  )
}

export default Footer