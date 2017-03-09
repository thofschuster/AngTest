import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
    selector: 'my-app',
    template: `
                <div class="container">
                    <ul class="list-group">
                        <li *ngFor="let todo of todos" class="list-group-item">
                            {{ todo.title }} ({{ todo.urgency }})
                        </li>
                    </ul>
                    <my-todo-add (onTodoAdd)="todos.push($event)"></my-todo-add>
                </div>
            `
})
export class AppComponent {

  todos = [
      new Todo("Angular 2 lernen", "hoch"),
      new Todo("Pizza essen", "gering")
  ]
  
}
