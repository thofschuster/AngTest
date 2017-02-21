import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div *ngFor="let card of cards">
                  <my-card title="{{card.title}}" [date]="card.date"></my-card>


                </div>
            `
})
export class AppComponent {

    cards = [
        {
            title: "Angular du stück",
            date: new Date(2020,1,1)
        },
        {
            title: "Ich bin alt!",
            date: new Date(2010,1,1)
        }
    ];

}
