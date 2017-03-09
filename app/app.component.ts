import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div class="container">
                    <input type="text" [(ngModel)]="blogPost.title" />
                    <p> {{ blogPost.title }} </p>
                </div>
                <div class="container">
                    <my-select [options]="options" [(model)]="selectedLanguage" ></my-select>
                    <p>{{ selectedLanguage }}</p>
                </div>
            `
})
export class AppComponent {

    selectedLanguage = "Deutsch";
    options = [
        "Deutsch",
        "Englisch",
        "Japanisch"
    ]

    blogPost = {
        title: "Hallo Welt",
        content: "Hallo Welt (Content)"
    };
  
}
