import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <my-select [options]="options" (onChange)="onLangiuageChanged($event)"></my-select>
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

    onLangiuageChanged(newLanguage: string){
        alert("Language got changed to: " + newLanguage )
    }
}
