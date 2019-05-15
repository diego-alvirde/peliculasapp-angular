import { Injectable } from "@angular/core";
import { Http, Jsonp } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private apiKey: string = "86a2ffdf018d7d8fe6e41362467c77be";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";
  constructor(private jsonp: Jsonp, private http: Http) {}

  getPopulares() {
    let url = `${
      this.urlMoviedb
    }discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(
      map(res => {
        let peliculas: any[] = [];
        for (let pelicula of res.json().results) {
          peliculas.push(pelicula);
        }
        return peliculas;
      })
    );
  }
}
