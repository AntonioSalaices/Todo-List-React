import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';
import { Header, Image } from 'semantic-ui-react'
import task from '../task.png';
class App extends Component {
  render() {
    return (
      <div>
      <Image
          src={task}
          as='a'
          size='small'
          href='/'
          target='_blank'
          className="central"
        />
        <Header as='h2'  textAlign='center'>
        
          <Header.Content>Todo-List</Header.Content>
        </Header>
        <TodoList />
      </div>
    );
  }
}

export default App;