import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";

//Services
import { PeliculasService } from "./services/peliculas.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ImagenPipe } from "./pipes/imagen.pipe";
import { ActualesComponent } from "./components/actuales/actuales.component";

//Rutas
import { appRouting } from "./app.routes";
import { NinosComponent } from './components/ninos/ninos.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ImagenPipe,
    ActualesComponent,
    NinosComponent,
    PeliculaTarjetaComponent,
    PeliculaComponent
  ],
  imports: [BrowserModule, HttpModule, JsonpModule, appRouting],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
