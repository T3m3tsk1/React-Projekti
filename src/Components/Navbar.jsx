import React from 'react'
import './Header.css'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import LogoImage from '../images/logo.jpg'


const Navbar = () => {
  const [ Click, setClick ] = useState(false)

  const HandleClick = () => {
    Click ? setClick(false) : setClick(true)
  }

  const FalseClick = () => {
    setClick(false)
  }

  return (
    <div className='navbar'>
      <div>
        <Link to='/' className='logo' onClick={FalseClick}>
          <p className='logo-text'>MechanoMind</p>
          <img src={LogoImage} className='logo-img' />
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/info' className='nav-link'>
            Info
          </Link>
        </li>
        <li>
          <Link to='/contact' className='nav-link'>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/products' className='nav-link'>
            Products
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-link'>
            About
          </Link>
        </li>
      </ul>
      <div className='menu-button-container'>
        <Button />
        <div className='menu-icon' onClick={HandleClick}>
          <i className={Click ? "fa solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
      <MobileMenu click={Click} handleClick={HandleClick} />
    </div>
  )
}

export default Navbar