import { Injectable } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../../core/model/index';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private userService: UserService) {
  }

  /**get user by its name, check premission*/
  getUserPremission(): boolean {
    if (this.userService.user) {
      const u: User = this.userService.getAllUsers().find((element) => {
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