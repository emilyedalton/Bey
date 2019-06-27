import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import Footer from './components/Footer'

import Image from './components/Image'



require('dotenv').config()



function App() {
  return (
    <div className="App">
    <Image/>

  <Map/>
  <Footer/>
    </div>
  );
}

export default App;
