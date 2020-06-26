import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/todo.actions';

export const initialState = 0;

const counterReducerInner = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return counterReducerInner(state, action);
}
