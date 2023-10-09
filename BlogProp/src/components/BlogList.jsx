import React from 'react'
import BlogPost from './BlogPost'
import Data from '../Data'


export default function App() {
  const blogElement = Data.map(Blog => {
    return(
      <BlogPost
      title= {Blog.title}
      subtitle= {Blog.subTitle}
      author={Blog.author}
      date={Blog.date}
      
      />
    )

  })
  return (
  <section className='Blog--List--Container'>
    {blogElement}
    <p>older posts</p>
  </section>
    )
}
