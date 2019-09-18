import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirmation]'
})
export class ConfirmationDirective {

  constructor() {
  }

  @HostListener('click', ['$event']) onClick(event) {
    if (confirm('Are you sure?')) {
      console.log('User confirmed');
    }
    else {
      console.log('User has not confirmed, request failed');
      event.preventDefault(); 
    }
  }
}
