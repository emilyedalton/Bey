import React from 'react'
import { Container, Grid, Segment, Header } from 'semantic-ui-react'
import '../assets/css/index.css'


    
const Heading  = () => (

<Segment style={{backgroundColor: "#91c7ed", color:"white"}}>
 
 <Grid>
 <Grid.Row />

 <Grid.Column  as= "h1"textAlign='left' width={16}>

 <Grid.Row>
      <Header size="large">Mapping Southern Exposure</Header>



  </Grid.Row>
  </Grid.Column>


<Grid.Column as= "p"textAlign='left'width={16}>

<Grid.Row>
<Header size ="small">Architecht and photographer Lee Bey documented the remarkable and unsung architecture of Chicago's South Side in his book Southern Exposure. Learn more about the sites in the book in this interactive map</Header>
</Grid.Row>
</Grid.Column>
</Grid>
 </Segment>
)
export default Heading