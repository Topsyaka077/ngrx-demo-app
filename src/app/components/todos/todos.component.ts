import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { addTodoItem, checkTodoItem, filterTodoList, removeTodoItem } from '../../store/actions/todo.actions';
import { selectFilteredTodos, selectTodoFilter } from '../../store/selectors/todo.selector';

import { IAppReducer } from '../../store/reducers/app.reducer';
import { ITodoItem } from '../../models/TodoItem';
import { Observable } from 'rxjs';
import { TodoFilters } from 'src/app/models/TodoFilters';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit {
  public todoItems$: Observable<ITodoItem[]>;
  public todoFilterType$: Observable<TodoFilters>;
  public todoFrom: FormGroup = new FormGroup({
    title: new FormControl(''),
    checked: new FormControl(false)
  });

  constructor(
    private store: Store<IAppReducer>
  ) {}

  ngOnInit() {
    console.log(selectFilteredTodos);
    this.todoItems$ = this.store.pipe(select(selectFilteredTodos));
    this.todoFilterType$ = this.store.pipe(select(selectTodoFilter));
  }

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

  public handleTodoFilterChange(filter: any) {
    this.store.dispatch(filterTodoList({ filter }));
  }

  private addTodoItem(todoItem: ITodoItem) {
    this.store.dispatch(addTodoItem({ todoItem }));
  }
}
