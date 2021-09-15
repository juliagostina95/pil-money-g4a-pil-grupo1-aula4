import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuard implements CanActivate {
  constructor(private router: Router, private auth: UsersService, private _location: Location){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean> {
     return this.auth.estaAutenticado.pipe(take (1),
     map((isLogged:boolean)=>isLogged));
  }

}
