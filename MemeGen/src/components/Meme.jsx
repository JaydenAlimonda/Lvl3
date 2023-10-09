import React from 'react'
import Data from '../Data'
export default function App() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(Data)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    return(
    <main className='mainMeme'>
    <div className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
        />
        <button 
            className="form--button"
            onClick={getMemeImage}
        >
            Get a new meme image 🖼
        </button>
    </div>
    <div className='image--container'>
    <img src={meme.randomImage} className='meme--image'/>
    </div>
</main>
  )
}