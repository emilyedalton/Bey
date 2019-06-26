import React ,{Component} from 'react'
import { Menu, Sticky,  } from 'semantic-ui-react'



class Nav extends Component {

  render() {
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Menu
            attached='top'
            tabular
            style={{ backgroundColor: '#fff', paddingTop: '1em' }}
          >
            <Menu.Item as='a' active name='bio' />
            <Menu.Item as='a' active={false} name='photos' />
            <Menu.Menu position='right'>
             </Menu.Menu>
             </Menu>
             </Sticky>
      </div>
    )
  }
}


export default Nav