import React from "react"
import Friend from "./Friend"
import Data from "../Data"
export default function App() {

  
    const friendElement = Data.map(list => {
      
      return (
        < Friend {...list} /> 
    )}
    
    )
  
    

    return (
    <>
    <section className="firend-list">
      {friendElement}
    </section>
    
    </>
  )
}