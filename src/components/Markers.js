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
          <p>{this.props.address}</p>
          <Card.Description>
          {this.props.description}
          </Card.Description>
        </Card.Content>
      </Card>}
      on='click'
></Popup>


</div>
        )
    }
}

export default Markers