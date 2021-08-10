import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, CanActivate } from '@angular/router';


@Component({
  selector: 'app-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

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
       }, 1000)
     }
   })
  }
}

