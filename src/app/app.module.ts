import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contador.module';
//import { ContadorComponent } from './contadores/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ContadorModule, HeroesModule //traes HeroesModule (todo lo de la carpeta heroes) para traer y usar el <app-listado>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
