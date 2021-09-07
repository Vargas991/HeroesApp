import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  termino: string = '';
  heroes: Hero[]=[];
  heroeSeleccionado: Hero | undefined;
  longitud: number = 0;

  constructor(private heroesService: HeroesService) { }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe( heroes => this.heroes = heroes );

      
  }

  opcionSeleccionada(event: any){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
      
    const hero: Hero = event.option.value;
    this.termino = hero.superhero!;
    this.heroesService.getHeroePorId(hero.id!)
      .subscribe( heroe => this.heroeSeleccionado = heroe);
  }
}
