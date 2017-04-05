import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
    selector: 'my-app',
    template: `
                <div class="container">
                    <br/>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Todo Liste</h3>
                        </div>
                        <ul class="list-group">
                            <li
                                *ngFor="let todo of todos"
                                [ngClass]="{'list-group-item' : true, 'list-group-item-success' : todo.urgency == 'gering', 'list-group-item-danger' : todo.urgency == 'hoch'}"                                
                            >
                                {{ todo.title }} ({{ todo.urgency }})
                            </li>
                        </ul>
                    </div>
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
