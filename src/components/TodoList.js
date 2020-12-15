import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { fetchTodos, toggleTodo, deleteTodo, toggleTab } from '../actions';
import { TABS } from '../actions/types';

class TodoList extends Component {
  componentDidMount = async () => {
    this.props.fetchTodos();
    try {
      setInterval(async () => {
        this.props.fetchTodos();
      }, 10000);
    } catch (e) {
      console.log(e);
    }
  };

  removeComplete = () => {
    this.props.todos.forEach(({ done, id }) => {
      if (done) this.props.deleteTodo(id);
    });
  };

  renderTodos = todos => {
    return todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          done={todo.done}
          toggleTodo={() => this.props.toggleTodo(todo.id)}
          deleteTodo={() => this.props.deleteTodo(todo.id)}
        />
      );
    });
  };

  renderTabs = currTab => {
    return TABS.map(tab => {
      return (
        <button
          key={tab}
          className={tab === currTab ? 'button selected' : 'button'}
          onClick={() => this.props.toggleTab(tab)}
        >
          {tab}
        </button>
      );
    });
  };

  render() {
    let todos = [];

    if (this.props.currTab === 'todos') {
      todos = this.props.todos;
    } else if (this.props.currTab === 'activo') {
      todos = this.props.todos.filter(todo => !todo.done);
    } else if (this.props.currTab === 'cumplido') {
      todos = this.props.todos.filter(todo => todo.done);
    }

    return (
      <article>
        <TodoForm />
        {this.props.todos.length ? (
          <div style={{ marginBottom: 20, marginLeft: 10 }}>
            {this.props.todos.filter(todo => !todo.done).length} tareas por hacer
          </div>
        ) : null}

        <div>
          {this.props.todos.length ? this.renderTabs(this.props.currTab) : null}
          {this.props.todos.some(todo => todo.done) ? (
            <button className="button clear" onClick={this.removeComplete}>
              Eliminar tareas cumplidas
            </button>
          ) : null}
        </div>

        <ul style={{ paddingLeft: 10 }} className="list">
          {this.renderTodos(todos)}
        </ul>
      </article>
    );
  }
}

const mapStateToProps = ({ todos, currTab }) => {
  return { todos, currTab };
};

export default connect(
  mapStateToProps,
  { fetchTodos, toggleTodo, deleteTodo, toggleTab }
)(TodoList);