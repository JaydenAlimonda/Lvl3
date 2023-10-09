import React, { useState } from 'react';

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 5, 6, 3]);

  // Function to generate a random number between 1 and 6
  function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Function to update the state with random numbers
  function setRandomNumbers() {
    const randomArray = numbers.map(() => randomNumber());
    setNumbers(randomArray);
  }

  return (
    <>
      <button className='Dice--Button' onClick={setRandomNumbers}>
        Roll Dice
      </button>
      <p className='Dice--Number'>{numbers.join(', ')}</p>
    </>
  );
}