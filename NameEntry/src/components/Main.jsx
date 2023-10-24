import React, { useState } from 'react';

function App() {
  //manage input value and the list of names
  const [formData, setFormData] = useState({
    inputValue: '',
    nameList: [],
  });
  
  //handle input changes
  function handleInputChange(event) {
    const newValue = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      inputValue: newValue,
    }));
  }

  //add the input value to the name list
  const handleAddName = () => {
    const inputValue = formData.inputValue;
      setFormData((prevData) => ({
        inputValue: '', //Clear
        nameList: [...prevData.nameList, inputValue], // Add to the name list
      }));
  };

  return (
    <div>
      <header>
        <h1>Name Entry Assignment</h1>
      </header>
      <div>
        <input
          type="text"
          placeholder="Enter a name"
          value={formData.inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddName}>Add</button>
      </div>
      <div>
        <h1>{formData.inputValue}</h1>
        <ol>
          {formData.nameList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
