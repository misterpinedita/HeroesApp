import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() heroeIdx: number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor() {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
      this.heroeSelected.emit(this.heroeIdx);
  }
}
