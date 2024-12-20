import React from 'react'
import '../index.css'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <form className='contact-form' name='contact' method='POST' data-netlify='true' >
      <h2>Get in touch</h2>
      <input 
        className='name-input'
        type="text"
        name='name'
        placeholder='Your Name'
        required
      />
      <div className='email-and-phone'>
        <input
          className='email-input'
          type="email"
          name='email'
          placeholder='Email'
          required
        />
        <input
          className='phone-input'
          type="tel"
          name='phone'
          placeholder='Phone Number'
          required 
        />
      </div>
      <textarea
        className='textarea-input'
        name='message'
        placeholder='Your Message'
        required
      ></textarea>
      <button className='submit-button' type='submit'>Send</button>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default ContactForm