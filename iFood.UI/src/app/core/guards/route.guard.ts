import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {

    constructor(public router: Router) {}

    canActivate(): boolean {
      const isLogged = localStorage.getItem('ifood.islogged') === 'true';

      if (!isLogged) {
        this.router.navigateByUrl('/');
      }

      return isLogged;
    }
}
