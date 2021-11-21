import './App.css';
import React, { useState } from 'react';
import GoogleChart from './components/GoogleChart';
import Nav from './components/Nav';

function App() {
  const [menuId, setMenuId] = useState(null);

  return (
    <div className="App">
      <Nav menuId={menuId} />
      <GoogleChart menuId={menuId} />
    </div>
    // <div className="app">
    //   <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
    //   <Box card={index === 2} moveCard={moveCard.bind(null, 2)}></Box>
    //   {/* <Box card={index === 3} moveCard={moveCard.bind(null, 3)}></Box> */}
    // </div>
  );
}

export default App;
