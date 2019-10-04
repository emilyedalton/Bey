import React, { Component } from 'react';
import { Container, Grid, Header, Segment} from 'semantic-ui-react'

class Footer extends Component {
    render() {

        return (
    <div>

  <Segment  style={{backgroundColor: "#91c7ed"}}>
  <Container>
    <Grid verticalAlign='middle'>
      <Grid.Row/>
        <Grid.Column align="left"  width={16}>
        <Header size="small" as='a' href="http://www.emilyedalton.com" target ="_blank" active={false} >
© Emily Dalton 
          </Header>
         
        </Grid.Column>
    </Grid>
  </Container>
</Segment>
</div>
        )}}
export default Footer