import React from 'react'
import '../index.css'
import './ContactForm.css'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.submit()

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  return (
    <form className='contact-form' name='contact' action='https://formspree.io/f/xldeqzpv' method='POST' onSubmit={handleSubmit} >
      <h2>Get in touch</h2>
      <input 
        className='name-input'
        type="text"
        name='name'
        placeholder='Your Name'
        value={formData.name}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <div className='email-and-phone'>
        <input
          className='email-input'
          type="email"
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className='phone-input'
          type="tel"
          name='phone'
          placeholder='Phone Number'
          value={formData.phone}
          onChange={handleChange}
          autoComplete="off"
          required 
        />
      </div>
      <textarea
        className='textarea-input'
        name='message'
        placeholder='Your Message'
        value={formData.message}
        onChange={handleChange}
        autoComplete="off"
        required
      ></textarea>
      <button className='submit-button' type='submit'>Send</button>
      <input type="hidden" name="_gotcha" />
    </form>
  )
}

export default ContactForm