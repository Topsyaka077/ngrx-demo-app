import { addTodoItem, checkTodoItem, removeTodoItem } from '../actions/todo.actions';
import { createReducer, on } from '@ngrx/store';

import { ITodoItem } from '../../models/TodoItem';

export interface ITodosState {
  todos: ITodoItem[];
}

export const initialState: ITodosState = {
  todos: [],
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
);

export function todoReducer(state, action) {
  return todosReducerInner(state, action);
}
