import { Component, OnInit,HostBinding } from '@angular/core';
import {  trigger,state,style,transition,animate, } from '@angular/animations';
@Component({
  selector: 'app-test',
  // animations: [
  //   trigger('openClose', [

  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.8,
  //       backgroundColor: 'blue'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
  
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
