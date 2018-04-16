import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CharactersComponent } from "./characters/characters.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'detail/:id', component: CharacterDetailComponent },
    { path: 'ships', component: ShipsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {

}