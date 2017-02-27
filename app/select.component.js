"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SelectComponent = (function () {
    function SelectComponent() {
        this.dropDownOpened = false;
    }
    return SelectComponent;
}());
SelectComponent = __decorate([
    core_1.Component({
        selector: "my-select",
        template: "\n        \n        <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" (click)=\"dropDownOpened = !dropDownOpened\">\n                Action <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" style=\"display: block;\" *ngIf=\"dropDownOpened\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n            </ul>\n        </div>\n\n\n    "
    })
], SelectComponent);
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map