import {
  addTodoItem,
  checkTodoItem,
  fetchTodosError,
  fetchTodosStarted,
  fetchTodosSucces,
  filterTodoList,
  removeTodoItem
} from '../actions/todo.actions';
import { createReducer, on } from '@ngrx/store';

import { ITodoItem } from '../../models/TodoItem';
import { TodoFilters } from 'src/app/models/TodoFilters';

export interface ITodosState {
  todos: ITodoItem[];
  fetchTodosStarted: boolean;
  filter: TodoFilters;
}

export const initialState: ITodosState = {
  todos: [],
  fetchTodosStarted: false,
  filter: TodoFilters.SHOW_UNCHECKED,
};

const todosReducerInner = createReducer(initialState,
  on(addTodoItem, (state, { todoItem }) => ({
    ...state,
    todos: [...state.todos, {
      ...todoItem,
      id: (state.todos.length + 1)
    }]
  })),
  on(removeTodoItem, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(item => item.id !== id)
  })),
  on(checkTodoItem, (state, { id }) => ({
    ...state,
    todos: state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked
        };
      }
      return item;
    })
  })),
  on(filterTodoList, (state, { filter }) => ({
    ...state,
    filter
  })),
  on(fetchTodosStarted, (state) => ({...state, fetchTodosStarted: true})),
  on(fetchTodosError, (state) => ({...state, fetchTodosStarted: false})),
  on(fetchTodosSucces, (state, { todos }) => ({...state, fetchTodosStarted: false, todos })),
);

export function todoReducer(state, action) {
  return todosReducerInner(state, action);
}
