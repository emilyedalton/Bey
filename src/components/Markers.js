import React, { Component } from 'react';
import { Grid, Popup, Icon, Image} from 'semantic-ui-react'

class Markers extends Component {
    render() {

        return (
            <div>
<Popup
size="huge"

trigger=
{ <Icon name='marker' size ='big' color ='red'/>  }
>
<Popup.Header>{this.props.name}</Popup.Header>
<Popup.Content>

<Grid style ={{border:"2px solid green"}} columns={2}>
<Grid.Column width={16} style ={{border:"2px solid red"}}>
<Image src={this.props.image}/>
</Grid.Column>
<Grid.Row/>
<Grid.Column width={16} style ={{border:"2px solid blue"}}>
{this.props.description}
</Grid.Column>

</Grid>
</Popup.Content>

</Popup>
</div>
        )
    }
}

export default Markers