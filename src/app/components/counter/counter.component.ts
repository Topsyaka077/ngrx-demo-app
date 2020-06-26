import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/actions/todo.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  public count$: Observable<number>;
  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit() { }
}
