import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  textToSearch: any;
  heroesFound: Heroe[];
  navigationSubscription;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.textToSearch = params.textToSearch;
    });
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.search(this.textToSearch);
      }
    });
    this.heroesFound = [];
    this.search(this.textToSearch);
  }

  ngOnInit(): void {
  }

  search(value: string): void {
    this.heroesFound = this.heroesService.searchHeroe(value);
  }

  goToHeroeDetail(name: string): void {
    this.router.navigate(['/heroe-detail', name]);
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
