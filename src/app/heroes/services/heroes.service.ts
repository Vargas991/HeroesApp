import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { 
      
  }
  getHeroes(): Observable <Hero[]>{
   return  this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId( id: string): Observable<Hero>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias( termino: string): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }
   
  

}
