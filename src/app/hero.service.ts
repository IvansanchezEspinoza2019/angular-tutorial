import { Injectable } from '@angular/core';
import  { Hero} from './hero'
import { heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor(private messgeService: MessageService) { }

  getHeros(): Observable<Hero[]>{  // return the list of heroes
    this.messgeService.add("HeroService: fetched heroes")
    return of(heroes)
  }
}
