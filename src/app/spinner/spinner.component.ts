import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, CanActivate } from '@angular/router';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

showSpinner: boolean

  constructor(private router: Router) {
    this.showSpinner = false
  }

  ngOnInit(): void {
   this.router.events.subscribe(event =>{
     if(event instanceof NavigationStart){
        this.showSpinner = true
     }
     else if(event instanceof NavigationEnd){
      setTimeout(() =>{
        this.showSpinner = false
       }, 2000)
     }  
   })
  }
}

