import { Component, Input } from '@angular/core';
import { Lector } from './lector';

@Component({
    selector: 'lector-detail',
    template: `
    <div *ngIf="lector">
      <h2>{{lector.name}} details!</h2>
      <div><label>id: </label>{{lector.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="lector.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class LectorDetailComponent {
    @Input() lector: Lector;
}
