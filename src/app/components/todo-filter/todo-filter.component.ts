import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoFilters } from 'src/app/models/TodoFilters';

@Component({
  selector: 'app-todo-filter',
  templateUrl: 'todo-filter.component.html'
})

export class TodoFilterComponent {
  @Input() public selectedFilter: TodoFilters;
  @Output() public currentFilterChange: EventEmitter<TodoFilters> = new EventEmitter();

  public filterOptions: string[] = Object.keys(TodoFilters).map(key => TodoFilters[key as any]);
}
