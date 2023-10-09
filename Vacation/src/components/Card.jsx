import React from "react"

export default function Card(props) {
    return (
        <section className="Hero--Card">
            <img src={props.img} className="hero--1--img" />
            <p>{props.place}</p>
            <p>{props.time}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}