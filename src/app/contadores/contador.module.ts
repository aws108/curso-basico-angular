import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
      ContadorComponent
    ],
    exports:[ //Debes exportarlo para que siga usándolo app.component.html
      ContadorComponent
    ],
    imports: [
      CommonModule //Lo que permite ngIf y ngFor
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class ContadorModule { }