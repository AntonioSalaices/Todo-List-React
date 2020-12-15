import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Input, Button, Form } from 'semantic-ui-react';
import './App.css';
class TodoForm extends Component {
  state = { text: '' };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Tarea:</label>
          <Input fluid className="input" name="text" value={this.state.text} onChange={this.handleChange} placeholder='Agrega tu tarea aquí' />
        </Form.Field>
        <Button className="Button__save" fluid color='blue'>Guardar</Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);