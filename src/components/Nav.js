import React ,{Component} from 'react'
import { Menu, Sticky,  } from 'semantic-ui-react'
import {NavLink, Link, } from 'react-router-dom'




class Nav extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({ contextRef })
    
  render() {
      
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Menu
            attached='top'
            tabular
            style={{ backgroundColor: '#fff', paddingTop: '1em' }}
          >
            <Menu.Item as={NavLink} to='/' name="Map" />
            <Menu.Item as={NavLink} to='/list' name="List" />

            {/* <Menu.Item as='a' active={false} name='photos' /> */}
            <Menu.Menu position='right'>
           <Menu.Item  as='a' href="http://nupress.northwestern.edu/content/southern-exposure" target ="_blank" active={false} name='Buy the Book'/>
             </Menu.Menu>
             </Menu>
             </Sticky>
      </div>
    )
  }
}


export default Nav