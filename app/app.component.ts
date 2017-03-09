import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <input type="text" [(ngModel)]="blogPost.title" />
                    <p> {{ blogPost.title }} </p>
                </div>
            `
})
export class AppComponent {

    blogPost = {
        title: "Hallo Welt",
        content: "Hallo Welt (Content)"
    };
  
}
