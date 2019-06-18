import React, { Component } from 'react';
import { Popup, Button, Container, Grid, Header, Menu, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

const sampleData = [
    
    {     
          "id": 1,
          "name": "Evanston",
          "lat": 42.045597,
          "lng": -87.688568
    },

    {     
        "id": 2,
        "name": "Willis Tower",
        "lat": 41.878876,
        "lng": -87.635918
  },

  {     
    "id": 3,
    "name": "Navy Pier",
    "lat": 41.892654,
    "lng": -87.610168
}
      ]
    


const mapStyle = require('./styles.json')
const AnyReactComponent = () => <Icon name='marker' size ='big' color ='red'/>;

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
<Grid columns={1} style ={{height: "100vh", border: "solid 2px red"}} >
<Grid.Row>
<Grid.Column width={16}> 

{/* <div style={{ height: '400px', width: '100%' ,border: "2px solid red"}}> */}
        <GoogleMapReact
         options={{
            styles: mapStyle
        }}
          bootstrapURLKeys={{ key: key }} 
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
       
       
      {  sampleData.map(item =>
            <AnyReactComponent
              key={item.key}
              lat={item.lat}
              lng={item.lng}
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