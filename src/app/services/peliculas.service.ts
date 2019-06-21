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

  buscarPelicula(texto: string) {
    let url = `${
      this.urlMoviedb
    }search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apiKey
    }&language=es`;
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

  peliculasActuales() {
    let url = `${
      this.urlMoviedb
    }discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-05-01&api_key=${
      this.apiKey
    }&language=es`;
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

  peliculasNinos() {
    let url = `${
      this.urlMoviedb
    }discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
      this.apiKey
    }&language=es`;
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

  getPelicula(id: string) {
    let url = `${this.urlMoviedb}movie/${id}?api_key=${
      this.apiKey
    }&language=es`;
    return this.http.get(url).pipe(
      map(res => {
        return res.json();
      })
    );
  }
}
