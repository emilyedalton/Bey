import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import Image from './components/Image'



require('dotenv').config()



function App() {
  return (
    <div className="App">
    <Image/>

  <Map/>
    </div>
  );
}

export default App;
