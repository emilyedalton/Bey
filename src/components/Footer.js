import React, { Component } from 'react';
import { Container, Grid, Header, Image, Segment} from 'semantic-ui-react'

class Footer extends Component {
    render() {

        return (
    <div>

  <Segment inverted  style={{backgroundColor: "#91c7ed"}}>
  <Container>
    <Grid verticalAlign='middle'>
      <Grid.Row/>
       
       
       
       
    
        <Grid.Column align="right"  width={16}>
        <Header as='h4' >
© Emily Dalton
          </Header>
         
        </Grid.Column>
    </Grid>
  </Container>
</Segment>
</div>
        )}}
export default Footer