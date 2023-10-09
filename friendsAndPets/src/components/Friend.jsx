import React from "react"
import Pets from "./Pets"

export default function Friends(props) {
    console.log(props)
    const petElement = props.pets.map(pet => (
        <Pets
          petName={pet.name}
          petBreed={pet.breed}
        />
    ))
    return (
        <section>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <div>
            <p>Pets:</p>
            <ul className="pet--list">
                  {petElement}             
            </ul>
          </div>
        </section>
      );
    }
