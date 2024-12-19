import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  }
  return (
    <>
      <button className='button' onClick={handleClick}>Contact</button>
    </>
  )
}

export default Button