import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroes } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = heroes

  // list of heroes
  hero: Hero = {
    id: 1,
    name: "Son goku"
  } 

  // assign a hero from the list
  selectedHero ?:Hero
  onSelect(hero: Hero) :void{
    this.selectedHero = hero
  }

  constructor() { }

  ngOnInit(): void {
  }

}
