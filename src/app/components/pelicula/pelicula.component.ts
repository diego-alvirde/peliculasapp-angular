import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styleUrls: ["./pelicula.component.css"]
})
export class PeliculaComponent implements OnInit {
  pelicula: any[] = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ps: PeliculasService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this._ps.getPelicula(params["id"]).subscribe(data => {
        this.pelicula = data;
        console.log(data);
      });
    });
  }

  ngOnInit() {}
}
