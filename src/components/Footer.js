import React, { Component } from 'react';
import { Container, Grid, Header, Image, Segment} from 'semantic-ui-react'

class Footer extends Component {
    render() {

        return (
    <div>

  <Segment inverted  style={{ height:"150px",backgroundColor: "#91c7ed"}}>
  <Container>
    <Grid verticalAlign='middle'>
      <Grid.Row/>
        <Grid.Column align="center"  width={2}>
        <Image   src={require('../assets/NUP_logo_REV.svg')} height={"80px"}/>       
         </Grid.Column>         
          <Grid.Column  align="center"  width={2}>
        Website
        </Grid.Column>   
        <Grid.Column align="left" width={2}>
        Contact
        </Grid.Column>   
        <Grid.Column align="left"  width={2}>
        Books
        </Grid.Column>   
        <Grid.Column align="left" width={2}>
        Lee Bey
        </Grid.Column>   
        <Grid.Column align="left"  width={6}>
        <Header as='h4' inverted>
© Northwestern University Press Web Productions
          </Header>
         
        </Grid.Column>
    </Grid>
  </Container>
</Segment>
</div>
        )}}
export default Footer