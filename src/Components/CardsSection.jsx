import React from 'react'
import '../index.css'
import './CardsSection.css'
import Card from './Card'
import CardData from './CardData'

const CardsSection = () => {

  return (
    <div className='cards-container'>
      {CardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  )
}

export default CardsSection