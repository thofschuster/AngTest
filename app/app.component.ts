import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <my-select></my-select>
                </div>
            `
})
export class AppComponent {

    timerDuration = 5;

    options = [
        "Deutsch",
        "Englisch",
        "Japanisch"
    ]
}
