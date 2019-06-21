import { Component, OnInit, Input } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-pelicula-tarjeta",
  templateUrl: "./pelicula-tarjeta.component.html",
  styleUrls: ["./pelicula-tarjeta.component.css"]
})
export class PeliculaTarjetaComponent implements OnInit {
  @Input('peliculas') peliculas;
  constructor(private _router:Router) {    
  }

  ngOnInit() {}

  verPelicula(id: number) {
    this._router.navigate(["/pelicula", id]);
  }

}
