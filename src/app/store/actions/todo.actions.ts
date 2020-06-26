import { createAction, props } from '@ngrx/store';

import { ITodoItem } from 'src/app/models/TodoItem';

export const addTodoItem = createAction('[Todo Page] Add todo item', props<{ todoItem: ITodoItem }>());
export const removeTodoItem = createAction('[Todo Page] Remove todo item', props<{id: number}>());
export const checkTodoItem = createAction('[Todo Page] Check todo item', props<{id: number}>());
