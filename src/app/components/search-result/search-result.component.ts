import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styles: []
})
export class SearchResultComponent implements OnInit {

  heroes: Array<any>;
  termino: string;

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

     }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes(params['nombre']);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
