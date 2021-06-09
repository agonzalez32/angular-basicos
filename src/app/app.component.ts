import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
  // template: `
  //   <h1>Hola de nuevo</h1>
  // `
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
}
