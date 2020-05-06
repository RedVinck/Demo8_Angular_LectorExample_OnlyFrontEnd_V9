import { Component } from '@angular/core';
import {Lector} from './lector';

const LECTORS: Lector[] = [
  {id: 1, name: 'Rudi Swennen'},
  {id: 2, name: 'Elke Steegmans'}
]

@Component({
  selector: 'app-lector',
  template: `
    <h1>{{title}}</h1>
    <h2>My lectors</h2>
    <ul>
      <li *ngFor="let lector of lectors" (click)="onSelect(lector)">
        <span>{{lector.id}}</span> {{lector.name}}
      </li>
    </ul>
    <div *ngIf="selectedLector">
      <h2>{{selectedLector.name}} details!</h2>
      <div><label>id: </label>{{selectedLector.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedLector.name" placeholder="name"/>
      </div>
    </div>

  `
})
export class AppComponent {
  title = 'Tour of Lectors';
  lectors = LECTORS;
  selectedLector: Lector;
  onSelect(lector: Lector): void {
    this.selectedLector = lector;
  }

}
