import React from 'react'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Data from './Data'
export default function App() {

    const cardElement = Data.map(card => {
      return (< Card
    img= {`../src/images/${card.image}`}
    place= {card.place}
    price = {card.price}
    time= {card.timeToGo}
    /> 
    
    
    )
  })  
    return (
    <>
    <Navbar />
    <Hero />
    <section className="cards-list">
      {cardElement}           
    </section>
    
    
    
    </>
  )
}

