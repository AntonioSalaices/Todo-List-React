import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB
} from './types';
import axios from 'axios';

const API = "http://localhost:4000/";

export const fetchTodos = () => async dispatch => {
  const res = await axios.get(API+"todos");

  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const addTodo = name => async dispatch => {
  const res = await axios.post(`${API}todos/add`, { name });

  dispatch({ type: ADD_TODO, payload: res.data });
};

export const toggleTodo = id => async dispatch => {
  const res = await axios.put(`${API}todos/${id}`); 

  dispatch({ type: TOGGLE_TODO, payload: res.data });
};

export const updateTodo = (id, name) => async dispatch => {
  const res = await axios.put(`${API}todos/${id}/edit`, { name });

  dispatch({ type: UPDATE_TODO, payload: { ...res.data, name } });
};

export const deleteTodo = id => async dispatch => {
  const res = await axios.delete(`${API}todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: res.data });
};

export const toggleTab = tab => async dispatch => {
  dispatch({ type: TOGGLE_TAB, filter: tab });
};