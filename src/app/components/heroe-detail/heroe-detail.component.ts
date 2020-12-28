import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  private paramsRoute: any;
  heroeData: any;
  logoPath: string;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.paramsRoute = params;
    });
    this.getHeroe(this.paramsRoute.name);
    this.defLogoPath();
  }

  ngOnInit(): void {
  }

  getHeroe(name: string): void {
    this.heroeData = this.heroesService.getHeroe(name);
  }

  goToHeroesList(): void {
    this.router.navigate(['/heroes']);
  }

  defLogoPath(): void {
    const casa = this.heroeData[0].casa;
    this.logoPath = (casa === 'Marvel') ? '../../assets/img/marvel-logo.jpg' : '../../assets/img/dc-logo.png';
  }

}
