import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'


require('dotenv').config()



function App() {
  return (
    <div className="App">
  <Map/>
    </div>
  );
}

export default App;
