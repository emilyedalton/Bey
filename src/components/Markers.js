import React, { Component } from 'react';
import { Card, Grid, Popup, Icon, Image} from 'semantic-ui-react'

class Markers extends Component {
    render() {

        return (
            <div>
<Popup
size="huge"

trigger=
{ <Icon name='marker' size ='large' color ='red' 
/>  }

 content= {<Card>
        <Image src= {this.props.image} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>
          {this.props.description}
          </Card.Description>
        </Card.Content>
      </Card>}
      on='click'
></Popup>
{/* <Grid style ={{border:"2px solid green"}} columns={2}>
<Grid.Column width={16} style ={{border:"2px solid red"}}>
<Image src={this.props.image}/>
</Grid.Column>
<Grid.Row/>
<Grid.Column width={16} style ={{border:"2px solid blue"}}>
{this.props.description}
</Grid.Column> */}

{/* </Grid> */}

</div>
        )
    }
}

export default Markers