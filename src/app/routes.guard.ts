import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import {LoginI} from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuard implements CanActivate {
  constructor(private router: Router, private auth: UsersService){}
  
  canActivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree{
    
 if(!this.auth.loged){
   this.router.navigate([''])
 }
     return this.auth.loged;
   } 
  
}
