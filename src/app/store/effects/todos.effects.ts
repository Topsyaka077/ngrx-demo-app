import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  fetchTodosError,
  fetchTodosStarted,
  fetchTodosSucces,
  postTodoItemError,
  postTodoItemStarted,
  postTodoItemSuccess
} from '../actions/todo.actions';

import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodosServiceService } from '../../services/todos.service';

@Injectable()
export class TodosEffect {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTodosStarted),
    mergeMap(() => this.todosService.getTodos()
      .pipe(
        map((response: any) => response.todos),
        map(todos => (fetchTodosSucces({ todos }))),
        catchError(() => (fetchTodosError))
      ))
    )
  );

  postItem$ = createEffect(() => this.actions$.pipe(
    ofType(postTodoItemStarted),
    mergeMap((action) => this.todosService.postNewTodo(action.todoItem)
      .pipe(
        map((response: any) => response.todos),
        map(todos => (postTodoItemSuccess())),
        catchError(() => (postTodoItemError))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private todosService: TodosServiceService
  ) {}
}
