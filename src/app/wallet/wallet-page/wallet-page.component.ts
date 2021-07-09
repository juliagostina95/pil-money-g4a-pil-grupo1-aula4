import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.css']
})
export class WalletPageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}


  redirectToWallet(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate(['']))
 }


}
