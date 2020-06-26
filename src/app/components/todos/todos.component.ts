import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { addTodoItem, checkTodoItem, removeTodoItem } from '../../store/actions/todo.actions';

import { IAppReducer } from '../../store/reducers/app.reducer';
import { ITodoItem } from '../../models/TodoItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit {
  public todoItems$: Observable<ITodoItem[]>;
  public todoFrom: FormGroup = new FormGroup({
    title: new FormControl(''),
    checked: new FormControl(false)
  });

  constructor(
    private store: Store<IAppReducer>
  ) {
    this.todoItems$ = this.store.pipe(
      select((state) => state.todoReducer.todos)
    );
  }

  ngOnInit() { }

  public submitForm() {
    this.addTodoItem(this.todoFrom.value);
    this.todoFrom.reset();
  }

  public handleCheckTodo(id: number) {
    this.store.dispatch(checkTodoItem({ id }));
  }

  public handleRemoveTodoItem(id: number) {
    this.store.dispatch(removeTodoItem({ id }));
  }

  private addTodoItem(todoItem: ITodoItem) {
    this.store.dispatch(addTodoItem({ todoItem }));
  }
}
