import { createSelector, select } from '@ngrx/store';

import { IAppReducer } from '../reducers/app.reducer';
import { ITodoItem } from 'src/app/models/TodoItem';
import { TodoFilters } from 'src/app/models/TodoFilters';

export const selectTodos = (state: IAppReducer) => state.todoReducer.todos;
export const selectFilter = (state: IAppReducer) => state.todoReducer.filter;

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectFilter,
  (todos: ITodoItem[], filterType: TodoFilters) => {
    if (filterType === TodoFilters.SHOW_UNCHECKED) {
      return todos.filter(item => !item.checked);
    } else if (filterType === TodoFilters.SHOW_CHECKED) {
      return todos.filter(item => item.checked);
    } else {
      return todos;
    }
  }
);

export const selectTodoFilter = createSelector(
  selectFilter,
  (filter: TodoFilters) => filter
);
