import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <input type="text" [(ngModel)]="blogPost.title" />
                    <input type="text" value="{{ blogPost.title }}" (keyup)="blogPost.title = $event.target.value" />
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
