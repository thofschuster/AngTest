"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var todo_1 = require("./todo");
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [
            new todo_1.Todo("Angular 2 lernen", "hoch"),
            new todo_1.Todo("Pizza essen", "gering")
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n                <div class=\"container\">\n                    <br/>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\">Todo Liste</h3>\n                        </div>\n                        <ul class=\"list-group\">\n                            <li\n                                *ngFor=\"let todo of todos\"\n                                [ngClass]=\"{'list-group-item' : true, 'list-group-item-success' : todo.urgency == 'gering', 'list-group-item-danger' : todo.urgency == 'hoch'}\"                                \n                            >\n                                {{ todo.title }} ({{ todo.urgency }})\n                            </li>\n                        </ul>\n                    </div>\n                    <my-todo-add (onTodoAdd)=\"todos.push($event)\"></my-todo-add>\n                </div>\n            "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map