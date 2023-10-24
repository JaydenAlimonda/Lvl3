import React, { useState, useEffect } from 'react';

function App() {
  const [backgroundData, setBackgroundData] = useState({ new_color: '' });

  useEffect(() => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then((res) => res.json())
      .then((data) => setBackgroundData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <main>
      <div className='box' style={{ backgroundColor: `#${backgroundData.new_color}` }}>
      
      </div>
    </main>
  );
}

export default App;
