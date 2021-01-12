import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

// Servicios

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroeDetailComponent,
    HeroesComponent,
    SearchResultsComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
