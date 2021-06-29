import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgIcon: string
  @Input() template!: TemplateRef<any>;
  @Input() templateDos!: TemplateRef<any>
  @Input() templateTres!: TemplateRef<any>

  constructor(private router: Router) {
    this.imgIcon = '/assets/imagenes/money-check-alt-solid.svg'
  }

  ngOnInit(): void {
  }

}
