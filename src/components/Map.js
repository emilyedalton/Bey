import React, { Component } from 'react';
import { Popup, Button, Container, Grid, Header, Menu, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import Markers from "./Markers"
const sampleData = [
    
    {     
          "id": 1,
          "name": "Evanston",
          "lat": 42.045597,
          "lng": -87.688568,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Fountain_Square_Evanston.jpg/1024px-Fountain_Square_Evanston.jpg",
          "description": "very far north"
    },

    {     
        "id": 2,
        "name": "Willis Tower",
        "lat": 41.878876,
        "lng": -87.635918,
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Willis_Tower_From_Lake.jpg/800px-Willis_Tower_From_Lake.jpg",
        "description": "very tall"

  },

  {     
    "id": 3,
    "name": "Navy Pier",
    "lat": 41.892654,
    "lng": -87.610168,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Navy_Pier_1190x1585.jpg/800px-Navy_Pier_1190x1585.jpg",
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
        zoom: 10
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
            styles: mapStyle
        }}
          bootstrapURLKeys={{ key: key }} 
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter ={this.onChildMouseEnter}
          onChildMouseLeave ={this.onChildMouseLeave}>
       
       
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