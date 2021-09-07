import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private heroesServices : HeroesService) { }

  ngOnInit(): void {
  }


}
