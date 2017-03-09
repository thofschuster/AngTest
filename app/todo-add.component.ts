import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: "my-todo-add",
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Todo hinzufügen</h3>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <label>Titel:</label>
                    <input type="text" class="form-control" [(ngModel)]="todo.title" />
                </div>
                <div class="form-group">
                    <label>Priorität:</label>
                    <select class="form-control"[(ngModel)]="todo.urgency" >
                        <option>gering</option>
                        <option>normal</option>
                        <option>hoch</option>                        
                    </select>
                </div>
            </div>
            <div class="panel-footer">
                <button class="btn btn-default" (click)="onSubmitTodo()">Todo hinzufügen</button>
            </div>
        </div>

    `
})
export class TodoAddComponent {

    todo = new Todo();

    @Output() onTodoAdd = new EventEmitter<Todo>();

    onSubmitTodo(){
        this.onTodoAdd.emit(this.todo);

    }

}