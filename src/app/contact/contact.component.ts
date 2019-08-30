import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  email: string;
  subject: string;
  message: string;
  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted');
  }
  
  back() {
    this.pageService.currentPage = this.pageService.previousPage;
  }
}
