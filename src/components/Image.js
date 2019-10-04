import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'
import Nav from '../components/Nav'
import '../assets/css/index.css'


    



const Heading  = () => <Segment style={{height: "200px", backgroundColor: "#91c7ed", color:"white"}}  >

<Container>
 
 <Grid>
 <Grid.Row />
 <Grid.Column  width= {1}/>

 <Grid.Column  as= "h1"textAlign='left' width={9}>

 <Grid.Row>
      Mapping Southern Exposure



  </Grid.Row>
  </Grid.Column>

 <Grid.Column  width={6}>

<Grid.Row/>
</Grid.Column>
<Grid.Column  width={1}/>

<Grid.Column  as= "p"textAlign='left'width={9}>

<Grid.Row>
Architecht and photographer Lee Bey documented the remarkable and unsung architecture of Chicago's South Side in his book Southern Exposure. Learn more about the sites in the book in this interactive map. 

 </Grid.Row>
 </Grid.Column>
<Grid.Column width={6}>

<Grid.Row/>
</Grid.Column>
</Grid>
 </Container>
</Segment>



export default Heading