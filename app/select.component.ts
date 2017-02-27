import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: "my-select",
    template: `
        
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" (click)="dropDownOpened = !dropDownOpened">
                Action <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" style="display: block;" *ngIf="dropDownOpened">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </div>


    `
})

export class SelectComponent {

    dropDownOpened = false;

    @Input() options: String[];


}