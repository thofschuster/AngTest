"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todo_1 = require("./todo");
var TodoAddComponent = (function () {
    function TodoAddComponent() {
        this.todo = new todo_1.Todo();
        this.onTodoAdd = new core_1.EventEmitter();
    }
    TodoAddComponent.prototype.onSubmitTodo = function () {
        this.onTodoAdd.emit(this.todo);
        this.todo = new todo_1.Todo();
    };
    return TodoAddComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoAddComponent.prototype, "onTodoAdd", void 0);
TodoAddComponent = __decorate([
    core_1.Component({
        selector: "my-todo-add",
        template: "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Todo hinzuf\u00FCgen</h3>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label>Titel:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo.title\" />\n                </div>\n                <div class=\"form-group\">\n                    <label>Priorit\u00E4t:</label>\n                    <select class=\"form-control\"[(ngModel)]=\"todo.urgency\" >\n                        <option>gering</option>\n                        <option>normal</option>\n                        <option>hoch</option>                        \n                    </select>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                <button class=\"btn btn-primary\" (click)=\"onSubmitTodo()\">Todo hinzuf\u00FCgen</button>\n            </div>\n        </div>\n\n    "
    })
], TodoAddComponent);
exports.TodoAddComponent = TodoAddComponent;
//# sourceMappingURL=todo-add.component.js.map