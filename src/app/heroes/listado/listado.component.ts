import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit{
  
  heroes = ["Espiderman", "Ironiaman", "Hulkenberg", "Tor"];
  heroeBorrado:string="";

  ngOnInit(): void {
    
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || ""; //o es un héroe o es un undefined
  }

}
