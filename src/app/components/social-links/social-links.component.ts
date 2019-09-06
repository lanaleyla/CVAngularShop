import { Component, AfterContentInit, QueryList, ElementRef, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements AfterContentInit {

  @ContentChildren('ref') icons: QueryList<ElementRef>; //get all anchors with #ref referance

  constructor() { }

  ngAfterContentInit() {
    this.icons.forEach(element => {
      element.nativeElement.target = '_blank'; //set all the anchors target to _blank
    });
  }
}
