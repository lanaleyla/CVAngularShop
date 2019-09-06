import { Component, EventEmitter, Output } from '@angular/core';
import { LocalizationService, PermissionService, PageService } from '../../services/index';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  languages: string[];
  constructor(private pageService: PageService, private permissionService: PermissionService, private localizationService: LocalizationService) { }

  @Output() clickedEvent = new EventEmitter();        //click on option from the menu  /******************look if needed */
  @Output() clickCloseMenuEvent = new EventEmitter(); //x-close was clicked
  @Output() clickHideOnEvent = new EventEmitter();    //option was choosen ,hide the side bar

  ngOnInit() {
    this.languages = this.localizationService.languages;
  }

  /**change the language of the menu links */
  changeLanguage(e) {
    this.localizationService.changeLanguage(e.target.value);
  }

  /**send chosen category */
  showMain() {
    this.pageService.currentPage = 'home';
    this.clickedEvent.emit('home');
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**send chosen category  */
  showAbout() {
    this.pageService.currentPage = 'about';
    this.clickedEvent.emit('about');
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**send chosen category */
  showProducts() {
    this.pageService.currentPage = 'products';
    this.clickedEvent.emit('products');
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**send chosen category  */
  showContact() {
    this.pageService.currentPage = 'contact';
    this.clickedEvent.emit('contact');
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**show adding product form */
  showAddForm() {
    this.clickedEvent.emit('addProduct');
    this.pageService.currentPage = 'addEditProduct';
    this.clickHideOnEvent.emit(false);//hide side bar
  }

  /**get users premission */
  get permission(): boolean {
    return this.permissionService.getUserPremission();
  }

  /**hide side bar on x click */
  closeTopBar() {
    this.clickCloseMenuEvent.emit(false);
  }

}
