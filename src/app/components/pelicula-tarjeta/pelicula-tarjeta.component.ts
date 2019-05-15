import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pelicula-tarjeta",
  templateUrl: "./pelicula-tarjeta.component.html",
  styleUrls: ["./pelicula-tarjeta.component.css"]
})
export class PeliculaTarjetaComponent implements OnInit {
  @Input() pelicula: any = {};
  @Input() index: number;
  constructor(private _router: Router) {}

  ngOnInit() {}

  verPelicula() {
    this._router.navigate(["/pelicula", this.index]);
  }
}
