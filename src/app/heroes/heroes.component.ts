import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:  Hero[] = []

  // list of heroes
  hero: Hero = {
    id: 1,
    name: "Son goku"
  } 

  // assign a hero from the list
  selectedHero ?:Hero
  

  constructor(private heroService: HeroService) { 


  }


  getHeroes(): void{
  this.heroService.getHeros()
    .subscribe(heroes => this.heroes=heroes)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
