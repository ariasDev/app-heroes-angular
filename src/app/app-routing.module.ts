import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe-detail/:name', component: HeroeDetailComponent },
  { path: 'search-results/:textToSearch', component: SearchResultsComponent, runGuardsAndResolvers: 'always' },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
