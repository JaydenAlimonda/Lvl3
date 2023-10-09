import React from 'react'

export default function Blog(props) {

  return ( 
<section className='Blog--Container'>
      <a href="http://" className='Blog--Title'>{props.title}</a>
      <p className='Blog--Subtitle'>{props.subtitle}</p>
      <span className='Blog--Author'>Posted by {props.author}</span>
      <span className='Blog--Date'> {props.date}</span>

</section>
  )
  }

