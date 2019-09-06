import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() clickOnMenuEvent = new EventEmitter();

  constructor() { }

  /**update the visabilaty of the side bar menu */
  updateMenu(e) { 
    this.clickOnMenuEvent.emit(e);
  }

}
