import React from "react";
import logo from "../images/react-icon-small.png"
export default function Nav (){
  return ( 
    <nav className="Nav">
    <img className="logo" src= {logo} />
    <h1 > React Facts </h1>
    <h2 > React  Course - Project 1 </h2>
    </nav>
  )
}