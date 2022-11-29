import { Component } from "@angular/core";
import { TitleStrategy } from "@angular/router";
import { raceWith } from "rxjs";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent{
    nombre = "Ironman";
    edad = 34;

    obtenerNombre(){
        return this.nombre + " - " + this.edad;
    }

    get nombreMayuscula(){ //getter, aunque simula ser una propiedad, por eso en las llaves no usas ()
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = "Espiderman";
    }

    cambiarEdad():void{
        this.edad = this.edad+4;
    }

}