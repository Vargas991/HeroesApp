import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {
  heroe!: Hero;
  constructor(private activatedRoute:ActivatedRoute,
              private heroesService: HeroesService
    ) {

   }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroesService.getHeroePorId(id) )
        )
        .subscribe( heroe => {this.heroe = heroe;
          console.log(heroe);
        } );
    
  }

}
