import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  constructor() { }
  
  @Output() clickedEvent=new EventEmitter();        //click on option from the menu
  @Output() clickCloseMenuEvent=new EventEmitter(); //x-close was clicked
  @Output() clickHideOnEvent=new EventEmitter();    //option was choosen ,hide the side bar
  

  /**send chosen category */
  showMain(){
    this.clickedEvent.emit('home'); 
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**send chosen category  */
  showAbout(){
    this.clickedEvent.emit('about');
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**send chosen category */
  showProducts(){
    this.clickedEvent.emit('products');
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**send chosen category  */
  showContact(){
    this.clickedEvent.emit('contact');
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**hide side bar on x click */
  closeTopBar() {
    this.clickCloseMenuEvent.emit(false);
  }
  
}
