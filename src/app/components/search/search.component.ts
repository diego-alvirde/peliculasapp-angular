import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  peliculas: any[] = [];
  termino: string = "";
  constructor(private _ps:PeliculasService,
              private _ar:ActivatedRoute) {
    this._ar.params.subscribe(params => {      
      this._ps.buscarPelicula(params["buscar"]).subscribe((data:any)=>{
        this.peliculas = data;
      })
    });
  }

  ngOnInit() {
  }

}
