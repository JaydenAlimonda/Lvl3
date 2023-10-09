import React from 'react'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Data from './Data'
export default function App() {

    const cardElement = Data.map(card => {
      return (< Card
    img= {`../src/images/${card.coverImg}`}
    rating= {card.stats.rating}
    reviewCount={card.stats.reviewCount}
    country={card.location}
    title={card.title}
    price={card.price} /> 
    
    
    )
  })  
    return (
    <>
    <Navbar />
    <Hero />
    {cardElement}
    
    
    </>
  )
}

