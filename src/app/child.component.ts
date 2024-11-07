import {Component, input, OnChanges, OnInit, output, SimpleChanges} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'child-comp',
    standalone: true,
    imports: [
        FormsModule
    ],
    template: `
        <p>Привет {{name()}}</p> 
        <p>тебе {{age()}}</p> 
    `,
    styles: [`h2 {
        color: navy
    }`]
})
export class ChildComponent implements OnInit, OnChanges {
    name = input<string>();
    age = input<number>();


    constructor(){ console.log("constructor"); }
    ngOnInit() { console.log("onInit"); }
    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
}
