import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIL MONEY';
  ruta = ['inicio','ingresaryretirar','transferencias','pagos','inversiones','compra','misdatos']

  constructor(private router: Router){}

  rutas():boolean{
    let ruta = this.router.url.split('/');
    return ruta[1] !== 'wallet';
  }
}
