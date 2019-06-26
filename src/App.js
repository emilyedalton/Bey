import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import Heading from './components/Image'


require('dotenv').config()



function App() {
  return (
    <div className="App">
<Heading/>
  <Map/>
    </div>
  );
}

export default App;
