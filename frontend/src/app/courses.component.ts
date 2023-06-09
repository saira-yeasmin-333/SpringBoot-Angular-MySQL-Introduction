
import { Component } from "@angular/core";
import { CoursesService } from "./courses.services";
@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
    `
})
export class CoursesComponent {
    title="hi i am idiot";
    courses;
    constructor(service:CoursesService){
        this.courses=service.getCourse();
    }
}