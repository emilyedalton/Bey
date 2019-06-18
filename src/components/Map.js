import React, { Component } from 'react';
import { Popup, Button, Container, Grid, Header, Menu, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

const mapStyle = require('./styles.json')
const AnyReactComponent = () => <Icon name='marker' size ='big' color ='red'/>;

const key = process.env.REACT_APP_API_KEY
class Map extends Component {
   
    static defaultProps = {
       
        center: {
          lat: 41.8781,
          lng: -87.6298
        },
        zoom: 11
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
       
         <AnyReactComponent 
             lat={42.045597}
             lng={-87.688568}
           
           /> 
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