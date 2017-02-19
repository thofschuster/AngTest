import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div>
                   <input type="text" (keyup)="onInputChange($event.target.value)" />
                   <p>Im Eingabefeld steht folgender Text: {{inputValue}} </p> 
                </div>
            `
})
export class AppComponent {

    inputValue = "";    

    onInputChange(inputValue: string){

        this.inputValue = inputValue;
    }

}
