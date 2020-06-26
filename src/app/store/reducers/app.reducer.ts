import { ITodosState, todoReducer } from './todo.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface IAppReducer {
  todoReducer: ITodosState;
}

export const AppState: ActionReducerMap<IAppReducer> = {
  todoReducer,
};
