import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  logo: any

  constructor() {
    this.logo = {
      width: '35px',
      position: 'relative',
      left: '15px',
      bottom: '2px'
    }
   }
}
