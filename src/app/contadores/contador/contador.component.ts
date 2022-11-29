import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent{
    titulo = 'Contador App';
    num = 10;
    base = 5;

    acumular(valor:number){ //valor = 1
        if(valor>=1){
        this.num = this.num + this.base;
        }else{
        this.num = this.num - this.base;
        }
        
    }
}