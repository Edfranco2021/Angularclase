import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'claseAngular';
  /*Le envio esta data al html*/
  /*Para mostrar en el Html uso {{nombreDato}}*/
  edad = 45566;
}
