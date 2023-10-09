import React from "react"
import Heroimage from "../images/photo-grid.png"
export default function Hero() {
    return (
        <section className="hero">
            <img src={Heroimage} className="hero--photo" />
            <h1 className="hero--header">Vacation Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all around the world.</p>
        </section>
    )
}