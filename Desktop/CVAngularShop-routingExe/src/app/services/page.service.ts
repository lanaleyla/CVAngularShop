import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  _currentPage: string;
  constructor(private router: Router, private location: Location) { }

  /**get current page name */
  get currentPage(): string {
    return this._currentPage;
  }

  /**set current page name*/
  set currentPage(page: string) {
    this.router.navigate([page]);
  }

  /**back to previous page */
  backToPrev() {
    this.location.back();
  }
}


