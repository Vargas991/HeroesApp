import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    ` `
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Hero[]=[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.listarHeroes();
  }

  listarHeroes(){
    this.heroesService.getHeroes()
      .subscribe(hero => {
        this.heroes = hero;
      });
  }
}
