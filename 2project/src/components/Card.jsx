import React from "react"
import Hero1 from "../images/katie-zaferes.png"
import Star from "../images/star.png"
export default function Card(props) {
    console.log(Hero1)
    return (
        <section className="Hero--Card">
            <img src={props.img} className="hero--1--img" />

            <div className="rating">
            <img src={Star} />
            <span>{props.rating} </span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}