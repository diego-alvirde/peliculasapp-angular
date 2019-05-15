import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-actuales",
  templateUrl: "./actuales.component.html",
  styleUrls: ["./actuales.component.css"]
})
export class ActualesComponent implements OnInit {
  peliculas: any[] = [];
  constructor(public _ps: PeliculasService) {
    this._ps.peliculasActuales().subscribe(data => {
      this.peliculas = data;
      console.log(data);
    });
  }

  ngOnInit() {}
}
