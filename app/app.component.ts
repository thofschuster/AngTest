import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <my-timer [duration]="timerDuration" (onFinish)="onTimerFinish()" ></my-timer>
                </div>
            `
})
export class AppComponent {

    timerDuration = 5;

    onTimerFinish(){
        alert("Blablubberproll!");
    }
}
