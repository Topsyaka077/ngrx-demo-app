import { HttpClient } from '@angular/common/http';
import { ITodoItem } from '../models/TodoItem';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodosServiceService {
  private todosUrl = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) { }

  public getTodos() {
    return this.httpClient.get(this.todosUrl, {responseType: 'json', observe: 'body'});
  }

  public postNewTodo(todoItem: ITodoItem) {
    return this.httpClient.post(this.todosUrl, todoItem);
  }
}
