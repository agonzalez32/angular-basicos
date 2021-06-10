import { Component } from '@angular/core';
import { ResolveStart } from '@angular/router';

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

  sumar(){
    this.numero += 1;
  }
  
  restar(){
      this.numero -= 1;
  }

  base: number = 5;
  
  acumular( valor: number ){
    this.numero += valor;
  }

}
