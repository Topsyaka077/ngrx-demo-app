import { createAction, props } from '@ngrx/store';

import { ITodoItem } from 'src/app/models/TodoItem';
import { TodoFilters } from 'src/app/models/TodoFilters';

export const addTodoItem = createAction('[Todo Page] Add todo item', props<{ todoItem: ITodoItem }>());
export const removeTodoItem = createAction('[Todo Page] Remove todo item', props<{id: number}>());
export const checkTodoItem = createAction('[Todo Page] Check todo item', props<{id: number}>());

export const fetchTodosStarted = createAction('[Todo Page] Fetch todos started');
export const fetchTodosSucces = createAction('[Todo Page] Fetch todos success', props<{ todos: ITodoItem[] }>());
export const fetchTodosError = createAction('[Todo Page] Fetch todos error');

export const postTodoItemStarted = createAction('[Todo Page] Prost new item', props<{ todoItem }>());
export const postTodoItemSuccess = createAction('[Todo Page] Post new item success');
export const postTodoItemError = createAction('[Todo Page] Post new item error');

export const filterTodoList = createAction('[Todo Page] Filter todo list', props<{ filter: TodoFilters }>());
