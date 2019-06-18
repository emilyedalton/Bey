import React, { Component } from 'react';
import { Popup, Button, Container, Grid, Header, Menu, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

const mapStyle =[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": "100"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": "26"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "100"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "10.00"
            },
            {
                "saturation": "-20"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": "10.00"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": "10.00"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "22"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "10.00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    }
] 
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