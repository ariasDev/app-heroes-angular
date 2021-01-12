import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroeData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHeroeDetail(name: string): void {
    this.router.navigate(['/heroe-detail', name]);
  }

}
