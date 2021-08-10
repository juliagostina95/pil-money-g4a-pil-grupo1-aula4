import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header-wallet',
  templateUrl: './header-wallet.component.html',
  styleUrls: ['./header-wallet.component.css']
})
export class HeaderWalletComponent implements OnInit {

  @Input() templateTres!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
