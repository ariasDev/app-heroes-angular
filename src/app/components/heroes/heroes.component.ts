import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesList: Heroe[];

  constructor(private heroesService: HeroesService, private router: Router) {
  }

  ngOnInit(): void {
    this.heroesList = this.heroesService.getHeroesList();
  }
}
