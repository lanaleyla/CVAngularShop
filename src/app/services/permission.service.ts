import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'src/model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private userService: UserService) {
  }

  /**get user by its name, check premission*/
  getUserPremission(): boolean {
    if (this.userService.user) {
      let u: User = this.userService.getAllUsers().find((element) => {
        return element.name === this.userService.user.name;
      });
      if (u && u.permission === 'admin') {
        return true;
      }
      else return false;
    }
    else return false;
  }


}
