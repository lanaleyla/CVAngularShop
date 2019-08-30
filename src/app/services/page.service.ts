import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  previousPage: string;
  _currentPage: string;
  flag = 0;
  constructor() { }

  /**get current page name */
  get currentPage(): string {
    return this._currentPage;
  }

  /**set current page name*/
  set currentPage(page: string) {
    if (this.flag < 1) { //first assignment to the current page the 'back' will lead to home page
      this.previousPage='home';
      this._currentPage = page;
      this.flag = 1;
    } else {
      if (this._currentPage!==page) {//change current page 
        this.previousPage = this.currentPage;
        this._currentPage = page;
      }
    }

  }
}


