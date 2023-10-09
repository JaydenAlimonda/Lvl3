import React from "react"

export default function Pets(props) {
    return (
    <li className="pets">
    <p >name: {props.petName}</p>
    <p>breed: {props.petBreed}</p>
    </li>
    )
}