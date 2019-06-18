import React, { Component } from 'react';
import { Popup, Icon} from 'semantic-ui-react'

class Markers extends Component {
    render() {

        return (
            <div>
<Popup
trigger=
{ <Icon name='marker' size ='big' color ='red'/>  }
>
<Popup.Header>{this.props.name}</Popup.Header>
<Popup.Content>
{this.props.description}</Popup.Content>
</Popup>
</div>
        )
    }
}

export default Markers