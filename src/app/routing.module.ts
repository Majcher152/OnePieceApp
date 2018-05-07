import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';
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
    { path: 'character/detail/:id', component: CharacterDetailComponent },
    { path: 'ship/detail/:id', component: ShipDetailComponent },
    { path: 'ships', component: ShipsComponent },
    { path: 'weapons', component: WeaponsComponent },
    { path: 'weapon/detail/:id', component:  WeaponDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {

}