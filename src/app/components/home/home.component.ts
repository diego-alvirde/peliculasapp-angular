import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  peliculas: any[] = [];
  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe(data => {
      this.peliculas = data;
      console.log(data);
    });
  }

  ngOnInit() {}
}
