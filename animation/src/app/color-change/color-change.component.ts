import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css'],
  animations: [
    trigger('changeColor', [
      state('default', style({
        backgroundColor: 'blue'
      })),
      state('changed', style({
        backgroundColor: 'red'
      })),
      transition('default <=> changed', [
        animate('1s')
      ])
    ])
  ]
})
export class ColorChangeComponent {
  colorState = 'default';

  toggleColor() {
    this.colorState = this.colorState === 'default' ? 'changed' : 'default';
  }
}
