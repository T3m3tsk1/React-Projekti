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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new FormData();
    formBody.append("form-name", "contact");
    Object.keys(formData).forEach((key) => {
      formBody.append(key, formData[key]);
    });

    try {
      await fetch("/", {
        method: "POST",
        body: formBody,
      });
      alert("Message sent!");
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <form className='contact-form' name='contact' method='POST' data-netlify='true' onSubmit={handleSubmit} >
      <h2>Get in touch</h2>
      <input 
        className='name-input'
        type="text"
        name='name'
        placeholder='Your Name'
        value={formData.name}
        onChange={handleChange}
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
          required
        />
        <input
          className='phone-input'
          type="tel"
          name='phone'
          placeholder='Phone Number'
          value={formData.phone}
          onChange={handleChange}
          required 
        />
      </div>
      <textarea
        className='textarea-input'
        name='message'
        placeholder='Your Message'
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button className='submit-button' type='submit'>Send</button>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default ContactForm