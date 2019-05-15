import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ActualesComponent } from "./components/actuales/actuales.component";
import { AppComponent } from "./app.component";
import { NinosComponent } from "./components/ninos/ninos.component";
import { PeliculaTarjetaComponent } from "./components/pelicula-tarjeta/pelicula-tarjeta.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "actuales", component: ActualesComponent },
  { path: "ninos", component: NinosComponent },
  { path: "pelicula/:id", component: PeliculaComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const appRouting = RouterModule.forRoot(routes);
