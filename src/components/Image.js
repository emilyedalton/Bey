import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Nav from '../components/Nav'
import '../assets/css/index.css'

const fonts = {
    
        fontfamily: 'Bungee Inline'
    }
    



const Heading  = () => <Container 
 style={{height: "200px", backgroundColor: "#ADD8E6"}}  >
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
Plotting architecht and photographer Lee Bey's docmuentation of Chicago's South Side. 


 </Grid.Row>
 </Grid.Column>
<Grid.Column width={6}>

<Grid.Row/>
</Grid.Column>
</Grid>
 </Container>




export default Heading