import React from 'react';


function App() {
  const [colors, setColors] = React.useState(['white', 'white', 'white', 'white']);
  const newColors = [...colors];
  const toggleAll = () => {
    const newColors = colors.map((color) => (color === 'white' ? 'black' : 'white'));
    setColors(newColors);
  };

  const topPurple = () => {
    const newColors = colors.map((color, index) =>
      index < 2 ? 'purple' : color
    );
    setColors(newColors);
  };

  const bottomLeftBlue = () => {

    newColors[2] = 'blue';
    setColors(newColors);
  };

  const bottomRightBlue = () => {
    newColors[3] = 'blue';
    setColors(newColors);
  };

  const cornersGreen = () => {
    newColors[3] = 'green';
    newColors[0] = 'green';
    setColors(newColors);
  };

  return (
    <div>
      <div className="grid">
        {colors.map((color, index) => (
          <div key={index} className="square" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={toggleAll}>Toggle All</button>
        <button onClick={topPurple}>Top Half Purple</button>
        <button onClick={bottomLeftBlue}>Bottom Left Blue</button>
        <button onClick={bottomRightBlue}>Bottom Right Blue</button>
        <button onClick={cornersGreen}>Corner Green</button>
      </div>
    </div>
  );
}

export default App;
