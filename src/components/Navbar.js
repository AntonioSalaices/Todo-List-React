import React, { Component }	from 'react';
import { Menu, Image } from 'semantic-ui-react';
import './App.css'
export default class Navbar extends Component {
  
  render() {

    return (
      <Menu>
        <Menu.Item as='h2' header>Todo-List</Menu.Item>
      </Menu>
    )
  }
}
