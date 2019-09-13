import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService, PageService } from 'src/app/services/index';
import { User } from 'src/model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  contactForm: FormGroup;
  userFound: boolean = true; //user found in users array or not

  constructor(fb: FormBuilder, private userService: UserService, private pageService: PageService) {
    this.contactForm = fb.group({
      name: ['', Validators.required],
      passward: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  /**on submit update user status reset the form and  */
  resetForm() {
    const name: string = this.contactForm.get('name').value;
    const passward: string = this.contactForm.get('passward').value;
    const user: User = this.userService.getUser(name, passward); //search for a user
    if (user) {
      this.userFound = true;
      this.userService.user = user;       //send the found user      
      this.userService.userStatus = true; //update user status
      this.contactForm.reset();           //clear form 
      this.pageService.backToPrev();
    }
    else {
      this.userFound = false;
      this.contactForm.reset(); //clear form 
    }
  }

  /**for errors */
  get nameForm(): AbstractControl {
    return this.contactForm.get('name');
  }

  /**for errors */
  get passwardForm(): AbstractControl {
    return this.contactForm.get('passward');
  }

}
