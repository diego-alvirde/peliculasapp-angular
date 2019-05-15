import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-ninos",
  templateUrl: "./ninos.component.html",
  styleUrls: ["./ninos.component.css"]
})
export class NinosComponent implements OnInit {
  peliculas: any[] = [];
  constructor(public _ps: PeliculasService) {
    this._ps.peliculasNinos().subscribe(data => {
      this.peliculas = data;
      console.log(data);
    });
  }

  ngOnInit() {}
}
