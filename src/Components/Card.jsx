import React from 'react'
import './Card.css'

const Card = ({ title, description, image }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
      <img src={image} />
    </div>
  )
}

export default Card