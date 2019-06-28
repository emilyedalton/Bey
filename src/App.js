import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import List from './components/List'
import {Container} from 'semantic-ui-react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Image from './components/Image'
import { BrowserRouter,Route,Switch } from 'react-router-dom'



require('dotenv').config()

class App extends Component {
  render (){
  return (
    <div>
    <BrowserRouter>

<Image/>
    <Container>
    <Nav/>

      <Switch>
      <Route exact path ='/' component={Map}/>
      <Route path ='/list' component={List}/>
      </Switch>
     
     </Container>
     <Footer/>
     </BrowserRouter>

   </div>
 )}
 
 
}
export default App;


// function App() {
//   return (
//     <div className="App">
//     <Image/>

//   <Map/>
//   <Footer/>
//     </div>
//   );
// }

// export default App;
