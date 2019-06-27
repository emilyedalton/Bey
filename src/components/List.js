import React, { Component } from 'react';
import { Image, Item} from 'semantic-ui-react'

class List extends Component {
    render() {

        return (
    <div>
 <Item.Group>
    <Item>
      <Item.Image size='tiny' src={require('../assets/BEY_111.jpg')} />

      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
Text         </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
</Item.Group>
    </div>
        )
    }
}

export default List