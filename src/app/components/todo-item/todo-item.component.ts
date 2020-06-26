import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ITodoItem } from 'src/app/models/TodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {
  @Input() public todoItem: ITodoItem;
  @Output() public eventChecked: EventEmitter<number> = new EventEmitter();
  @Output() public removeTodoItem: EventEmitter<number> = new EventEmitter();

  public checkTodoItem() {
    this.eventChecked.emit(this.todoItem.id);
  }

  public onRemoveItemClick() {
    this.removeTodoItem.emit(this.todoItem.id);
  }
}
