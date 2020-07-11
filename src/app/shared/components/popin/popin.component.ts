import { Component, OnInit, Input } from '@angular/core';

@Component({
selector: 'app-popin',
templateUrl: './popin.component.html',
styleUrls: ['./popin.component.css']
})
export class PopinComponent {

  @Input() message;
  @Input() firstButton;
  @Input() secondButton;
  @Input() thirdButton;
  @Input() visible: Boolean;

  constructor() { }

}
