import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <ul>
                        <li *ngFor="let student of students">
                            {{student.firstname }} {{student.lastname}}
                        </li>
                    </ul>
                </div>
            `
})
export class AppComponent {
    students = [
        new Student("Tim", "Hof"),
        new Student("Tom", "Hof"),
        new Student("Toni", "Hof"),
        new Student("Tamara", "Hof")
    ];
}
