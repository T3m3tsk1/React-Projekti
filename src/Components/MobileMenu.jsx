import React from 'react'
import './MobileMenu.css'
import { Link } from 'react-router-dom'

const MobileMenu = (props) => {
  return (
    <div className={props.click ? 'mobile-menu click' : 'mobile-menu'}>
      <ul className='menu-list'>
        <li className='menu-link'>
          <Link to='/info' onClick={props.handleClick}>
            Info
          </Link>
        </li>
        <li className='menu-link'>
          <Link to='/contact' onClick={props.handleClick}>
            Contact
          </Link>
        </li>
        <li className='menu-link'>
          <Link to='/products' onClick={props.handleClick}>
            Products
          </Link>
        </li>
        <li className='menu-link'>
          <Link to='/' onClick={props.handleClick}>
            About
          </Link>
        </li>
        <button className='close-button' onClick={props.handleClick}>Close</button>
      </ul>
    </div>
  )
}

export default MobileMenu