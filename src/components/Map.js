import React, { Component } from 'react';
import { Popup, Button, Container, Grid, Header, Menu, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import Markers from "./Markers"
const sampleData = [
    
    {     
          "id": 1,
          "name": "Lavezzorio Community Center",
          "lat": 41.75595,
          "lng": -87.63883,
          "image": require('../assets/Bey_Test.jpg'),
          "description": "very far north"
    },

    {     
        "id": 2,
        "name": "Eighth Regiment Armory/Chicago Military Academy",
        "lat": 41.83109,
        "lng": -87.61933,
        "image": require('../assets/Bey_Test.jpg'),
        "description": "very tall"

  },

  {     
    "id": 3,
    "name": "Former Wabash Avenue YMCA",
    "lat": 41.64575,
    "lng": -87.620160,
    "image": require('../assets/Bey_Test.jpg'),
    "description": "lots of tourists"

}
      ]
    


const mapStyle = require('./styles.json')

const key = process.env.REACT_APP_API_KEY

class Map extends Component {
    
 
    static defaultProps = {
       
        center: {
          key: 1,
          lat: 41.8781,
          lng: -87.6298
        },
        zoom: 14
      };

    render() {

        return (
            <div>
<Container>
  <Menu/>
<Grid columns={1} style ={{height: "100vh"}} >
<Grid.Row>
<Grid.Column width={16}> 

{/* <div style={{ height: '400px', width: '100%' ,border: "2px solid red"}}> */}
        <GoogleMapReact
         options={{
            styles: mapStyle,
            draggableCursor: "default",
            draggingCursor: "pointer"
        }}
          bootstrapURLKeys={{ key: key }} 
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter ={this.onChildMouseEnter}
          // onChildMouseLeave ={this.onChildMouseLeave}
          >
       
       
      {  sampleData.map(item =>
     
            <Markers
              key={item.key}
              lat={item.lat}
              lng={item.lng}
              name={item.name}
              image={item.image}
              description={item.description}
              onChildMouseEnter ={this.onChildMouseEnter}
              onChildMouseLeave ={this.onChildMouseLeave}
              
/>            
     
        ) 
       }
    
         </GoogleMapReact>  
            
         </Grid.Column> 
  
</Grid.Row>
</Grid>
</Container>
</div>


    
        )
    }
    }

    export default Map