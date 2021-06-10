import { Component } from "@angular/core";

@Component({
    selector : 'app-Heroe',
    templateUrl: 'Heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad  : number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        //return this.nombre + ' ' + this.edad.toString();
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNomber(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }

}