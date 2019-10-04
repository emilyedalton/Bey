import React ,{Component} from 'react'
import { Menu, Sticky, Button } from 'semantic-ui-react'
import {NavLink, Link } from 'react-router-dom'




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

            <Menu.Menu position='right'>
           <Menu.Item >
           <Button as='a' href="http://nupress.northwestern.edu/content/southern-exposure" target ="_blank" active={false} content='Buy the Book'/>
           </Menu.Item>
             </Menu.Menu>
             </Menu>
             </Sticky>
      </div>
    )
  }
}


export default Nav