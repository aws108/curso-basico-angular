import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports:[ //Debes exportarlo para que siga usándolo app.component.html
    ListadoComponent
  ],
  imports: [
    CommonModule //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HeroesModule { }
