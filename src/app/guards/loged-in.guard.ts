import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../services/index';

@Injectable({
  providedIn: 'root'
})
export class LogedInGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (!this.userService.userStatus) {
      this.router.navigate(['login']);
    }
    return this.userService.userStatus;
  }
}
