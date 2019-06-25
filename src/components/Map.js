import React, { Component } from 'react';
import { Popup, Button, Container, Grid, Header, Menu, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import Markers from "./Markers"
const sampleData = [
    
  {
    "key": 1,
    "name": "Lavezzorio Community Center",
    "address": "7600 South Parnell Avenue",
    "lat": 41.75595,
    "lng": -87.63883,
    "description": "With its layered concrete exterior and open, kid-friendly interiors,this building was designed by architect Jeanne Gang in 2008.",
    "image": require('../assets/BEY_9.jpg')
},
{
    "key": 2,
    "name": "Former Wabash Avenue YMCA",
    "address": "3763 South Wabash Avenue",
    "lat": 41.64575,
    "lng": -87.62016,
    "description": "This former YMCA served Bronzeville from 1913 through the 1970s. Today, the building is the Renaissance Apartments, with 101 single-room occupancy units and a fitness center.",
    "image": require('../assets/BEY_21.jpg')
},
{
    "key": 3,
    "name": "Eighth Regiment Armory/Chicago Military Academy",
    "address": "3519 South Giles Avenue",
    "lat": 41.83109,
    "lng": -87.61933,
    "image": require('../assets/BEY_24.jpg')
},
{
    "key": 4,
    "name": "Welcome Inn Bed & Breakfast",
    "address": "4563 South Michigan Avenue",
    "lat": 41.811288,
    "lng": -87.622492,
    "description": "Built in 1893, this brick-and-limestone home is among many surviving examples of Grand Boulevard’s upscale origins.",
    "image": require('../assets/BEY_28.jpg')
},
{
    "key": 5,
    "name": "Former Calumet National Bank",
    "address": "9117 South Commercial Avenue",
    "lat": 41.729498,
    "lng": -87.550844,
    "description": "A city landmark, this three-story Classical Revival building, formerly a bank, was built in 1910, when Commercial Avenue was a thriving retail strip on Chicago’s steel-producing Southeast Side.",
    "image": require('../assets/BEY_35.jpg')
},
{
    "key": 6,
    "name": "Porch of Maidens, Museum of Science and Industry",
    "address": "5700 S Lake Shore Dr, Chicago, IL 60637 (museum address)",
    "lat": 41.790749,
    "lng": -87.582912,
    "image": require('../assets/BEY_38.jpg')
},
{
    "key": 7,
    "name": "Illinois Institute of Technology Machinery Hall",
    "address": "100 West Thirty-Third Street",
    "lat": 41.87897,
    "lng": -87.66063,
    "description": "Located just north of the Old Main Building; the two structures together formed the core of the Armour Institute of Technology, which was the forerunner to IIT.",
    "image": require('../assets/BEY_41.jpg')
},
{
    "key": 8,
    "name": "Central Manufacturing District Tower",
    "address": "2000 West Pershing Road",
    "lat": 41.823634,
    "lng": -87.633227,
    "description": "Created in 1915 as the nation’s first planned industrial district, the CMD features an enviable collection of high-quality warehouse and factory buildings, including this brick and terra-cotta tower.",
    "image": require('../assets/BEY_43.jpg')
},
{
    "key": 9,
    "name": "Pullman Colonnade Apartments",
    "address": "112th Street and Champlain Avenue",
    "lat": 41.621262,
    "lng": -87.601723,
    "description": "Built in 1893 in the heart of the Pullman neighborhood, four curved and colonnaded two-story apartment buildings surround the former Pullman Market Hall, where produce and bread were once sold. This duplex, designed by Pullman town architect Solon Beman, is one of four look-alike brick-andlimestone residences, each paired with one of the Colonnade Apartments buildings.",
    "image": require('../assets/BEY_47.jpg')
},
{
    "key": 10,
    "name": "Greenstone United Methodist Church",
    "address": "11211 South Street and Lawrence Avenue",
    "lat": 41.690578,
    "lng": -87.608049,
    "description": "This 1882 church is one of the few original Pullman buildings that isn’t made of red brick. Pullman architect Solon Beman instead selected green serpentine limestone quarried in Pennsylvania.",
    "image": require('../assets/BEY_48.jpg')
},
{
    "key": 11,
    "name": "Stephen A. Foster House and Stables",
    "address": "12147 South Harvard Avenue",
    "lat": 41.6728,
    "lng": -87.6306,
    "description": "Designed by Frank Lloyd Wright, the residence was built in 1900 as a summer house for a Chicago attorney.",
    "image": require('../assets/BEY_51.jpg')
},
{
    "key": 12,
    "name": "Method Soap Factory",
    "address": "720 East 111th Street",
    "lat": 41.697139,
    "lng": -87.601412,
    "description": "Designed by Virginia architect William McDonough and a local firm, Heitman Architects, this festive concrete building was constructed in 2015 and features a 230-foot wind turbine and a rooftop greenhouse where food is grown.",
    "image": require('../assets/BEY_53.jpg')
},
{
    "key": 13,
    "name": "St. Thomas Episcopal Church",
    "address": "3801 South Wabash Avenue",
    "lat": 41.825401,
    "lng": -87.624358,
    "description": "This midcentury church in the Bronzeville neighborhood, with its lively design, replaced an edifice that burned down.",
    "image": require('../assets/BEY_56.jpg')
},
{
    "key": 14,
    "name": "Chicago Vocational High School",
    "address": "2100 East Eighty-Seventh Street",
    "lat": 41.87897,
    "lng": -87.66063,
    "description": "The monumental gymnasium entrance sits on the eastern edge of the city’s second largest school, matching a similarly designed auditorium front on the western end.",
    "image": require('../assets/BEY_61.jpg')
},
{
    "key": 15,
    "name": "James H. Bowen High School",
    "address": "2710 East Eighty-Ninth Place",
    "lat": 41.878971,
    "lng": -87.660629,
    "description": "This handsome brick Prairie School building—albeit obscured by sketchy-looking trees and landscaping—was built in 1910 and designed by famed architect Dwight Perkins.",
    "image": require('../assets/BEY_65.jpg')
},
{
    "key": 16,
    "name": "Walter H. Dyett High School for the Arts",
    "address": "555 East Fifty-First Street",
    "lat": 41.801167,
    "lng": -87.612275,
    "description": "Opened in 1972, this public school, comprising a classroom wing (right) and a separate natatorium, was designed by David Haid and African American architect Kenneth Childers. A view of the natatorium.",
    "image": require('../assets/BEY_69.jpg')
},
{
    "key": 17,
    "name": "D’Angelo Law Library, University of Chicago",
    "address": "1120 East Sixtieth Street",
    "lat": 41.808063,
    "lng": -87.59825,
    "description": "Located on the southeastern edge of the University of Chicago campus, this building was designed by Eero Saarinen and completed in 1959.",
    "image": require('../assets/BEY_73.jpg')
},
{
    "key": 18,
    "name": "South Campus Chiller Plant, University of Chicago",
    "address": "6053 South Woodlawn Avenue",
    "lat": 41.784664,
    "lng": -87.596189,
    "description": "This glass and metal power plant designed by Helmut Jahn was completed in 2009.",
    "image": require('../assets/BEY_76.jpg')
},
{
    "key": 19,
    "name": "Jovita Idar Elementary School",
    "address": "5050 South Homan Avenue",
    "lat": 41.941421,
    "lng": -87.732836,
    "description": "Built in 2011 and named in honor of a Mexican American journalist and activist, this sleek charter school was designed by Juan Moreno and Ghafari Architects.",
    "image": require('../assets/BEY_79.jpg')
},
{
    "key": 20,
    "name": "Victoria Soto High School",
    "address": "5025 South Street and St. Louis Avenue",
    "lat": 41.802121,
    "lng": -87.710859,
    "description": "Designed by Wight & Co. and built in 2013, Victoria Soto High School is named after a twenty-year-old schoolteacher who was killed protecting her students in the 2012 Sandy Hook Elementary School massacre.",
    "image": require('../assets/BEY_81.jpg')
},
{
    "key": 21,
    "name": "Gary Comer Youth Center",
    "address": "7200 South Ingleside Avenue",
    "lat": 41.764061,
    "lng": -87.602443,
    "description": "Built in 2010 and designed by Chicago architect John Ronan, this brightly colored community center lights up a section of its working-class neighborhood. This view shows the building’s eye-catching side elevation, facing South Chicago Avenue.",
    "image": require('../assets/BEY_83.jpg')
},
{
    "key": 22,
    "name": "Stony Island Church of Christ",
    "address": "1600 East Eighty-Fourth Street",
    "lat": 41.751643,
    "lng": -87.585085,
    "description": "This small, modernist church is located next to bustling Stony Island Avenue; it was designed by Ray Stuermer, an architect who was once chief-of-design for industrial designer Raymond Loewy.",
    "image": require('../assets/BEY_85.jpg')
},
{
    "key": 23,
    "name": "Liberty Baptist Church",
    "address": "4849 South King Drive",
    "lat": 41.713634,
    "lng": -87.613952,
    "description": "Designed by architect William Alderman and completed in 1956, the church provides a dash of postwar modernism on an otherwise predominately early-twentieth-century boulevard. The arched parabolic roof is made of laminated wood arches and is covered in red tile.",
    "image": require('../assets/BEY_87.jpg')
},
{
    "key": 24,
    "name": "First Church of Deliverance",
    "address": "4315 South Wabash Avenue",
    "lat": 41.815878,
    "lng": -87.624123,
    "description": "The prominent twin towers on the exterior of the church were originally nicknamed “Old Testament” and “New Testament.”",
    "image": require('../assets/BEY_88.jpg')
},
{
    "key": 25,
    "name": "St. Gabriel Catholic Church",
    "address": "600 West Forty-Fifth Street",
    "lat": 41.827331,
    "lng": -87.641307,
    "description": "The church’s handsome main elevation and tower. An intricately detailed section of the building’s main entry.",
    "image": require('../assets/BEY_92.jpg')
},
{
    "key": 26,
    "name": "Allan Miller House",
    "address": "7121 South Paxton Avenue",
    "lat": 41.765474,
    "lng": -87.571066,
    "description": "Architect John Van Bergen based this two-story stucco design on Frank Lloyd Wright’s plan for affordable fireproof houses. It was built in 1915.",
    "image": require('../assets/BEY_97.jpg')
},
{
    "key": 27,
    "name": "Dr. E. J. Ingram House",
    "address": "6500 South Eberhart Avenue",
    "lat": 41.776474,
    "lng": -87.613419,
    "description": "Designed by African American architect Roger Margerum, for black physician E. J. Ingram, this 1959 home stands out in a neighborhood of circa 1900 residences.",
    "image": require('../assets/BEY_100.jpg')
},
{
    "key": 28,
    "name": "John Moutoussamy Home",
    "address": "361 East Eighty-Ninth Place",
    "lat": 41.87897,
    "lng": -87.66063,
    "description": "Architect Moutoussamy designed this elegant one-story home for himself and his family.",
    "image": require('../assets/BEY_104.jpg')
},
{
    "key": 29,
    "name": "8459 South Michigan Avenue",
    "address": "8459 South Michigan Avenue",
    "lat": 41.740825,
    "lng": -87.620999,
    "description": "Built in 1958, this Chatham home is an exercise in geometry—right down to its landscaping and topiary.",
    "image": require('../assets/BEY_105.jpg')
},
{
    "key": 30,
    "name": "8650 South Michigan Avenue",
    "address": "8650 South Michigan Avenue",
    "lat": 41.736656,
    "lng": -87.621299,
    "description": "Unusual angles and curves help this modernist home get the most out of its relatively small city lot. The C-shaped house has a neat entry garden behind a low brick wall that matches the house. The home’s attached garage faces busy Eighty-Seventh Street. The garage provides direct car access from the street while shielding the living space from the thoroughfare’s noise and bustle.",
    "image": require('../assets/BEY_106.jpg')
},
{
    "key": 31,
    "name": "Lu and Jorja Palmer House",
    "address": "3656 South King Drive",
    "lat": 41.713634,
    "lng": -87.613952,
    "description": "Designed by William L. Clay and built in 1885, this three-story dwelling is one of the city’s best examples of the homes built for the very rich in nineteenthcentury Chicago. The house is in deplorable condition, thanks to its Chicago developer owner. ",
    "image": require('../assets/BEY_109.jpg')
},
{
    "key": 32,
    "name": "Rosenwald Apartments",
    "address": "Forty-Seventh Street and Michigan Avenue",
    "lat": 41.810208,
    "lng": -87.62297,
    "description": "Designed by architect Ernest Grunsfeld Jr. and built in 1929, the Art Deco apartment building occupies nearly a full city block and surrounds a park-like interior courtyard.",
    "image": require('../assets/BEY_111.jpg')
},
{
    "key": 33,
    "name": "Yale Apartments",
    "address": "6565 South Yale Avenue",
    "lat": 41.774709,
    "lng": -87.631331,
    "description": "This seven-story Richardson Romanesque 1890s apartment building by architect John T. Long now provides affordable housing for senior citizens.",
    "image": require('../assets/BEY_115.jpg')
},
{
    "key": 34,
    "name": "GN Bank",
    "address": "4619 South King Drive",
    "lat": 41.713634,
    "lng": -87.613952,
    "description": "Built in 1962, this black-owned bank and modernist stand-out was designed by the St. Louis–based Bank Builders Corporation of America.",
    "image": require('../assets/BEY_119.jpg')
},
{
    "key": 35,
    "name": "Pride Cleaners,",
    "address": "558 East Seventy-Ninth Street",
    "lat": 41.809652,
    "lng": -87.611639,
    "description": "Designed by architect Gerald Siegwart and built in 1959, the building has an eye-catching hyperbolic paraboloid concrete roof.",
    "image": require('../assets/BEY_121.jpg')
},
{
    "key": 36,
    "name": "Jackson Park Beach House",
    "address": "Sixty-Third Street and the Lake",
    "lat": 41.781428,
    "lng": -87.573735,
    "description": "With balconies and beach-side galleries that overlook the lake, this 1919 Classical Revival beach house is among the most popular buildings on the South Side, especially on hot days.",
    "image": require('../assets/BEY_128.jpg')
},
{
    "key": 37,
    "name": "Auburn Lakes",
    "address": "Seventy-Eighth Street and Eggleston Avenue",
    "lat": 41.752596,
    "lng": -87.63558,
    "description": "This tranquil park and lagoon were built as part of an 1880s residential development.",
    "image": require('../assets/BEY_134.jpg')
},
{
    "key": 38,
    "name": "Oak Woods Cemetery",
    "address": "1035 East Sixty-Seventh Street",
    "lat": 41.87897,
    "lng": -87.66063,
    "description": "With trees, lakes, and winding paths, this cemetery is a serene spot that was designed by landscape architect Adolph Strauch to be enjoyed by the living.",
    "image": require('../assets/BEY_135.jpg')
},
{
    "key": 39,
    "name": "CTA Red Line Terminal",
    "address": "14 West Ninety-Fifth Street",
    "lat": 41.878971,
    "lng": -87.660629,
    "description": "This bright red transit station is a key link to downtown from the South Side. Replacing a smaller, fifty-year-old station, the facility features a pair of terminals connected by a 150-foot pedestrian bridge across Ninety-Fifth Street.",
    "image": require('../assets/BEY_149.jpg')
},
{
    "key": 40,
    "name": "Pedestrian Bridge",
    "address": "Forty-First Street and Lake Park Avenue",
    "lat": 41.820148,
    "lng": -87.60083,
    "description": "At 1,470 feet, this serpentine bridge is slightly longer than Chicago’s Willis Tower is tall— the length needed to carry bikers and pedestrians above active Metra Electric commuter rail lines and six lanes of Lake Shore Drive.",
    "image": require('../assets/BEY_151.jpg')
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