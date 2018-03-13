import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { CharacterService } from './services/character.service';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharactersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
