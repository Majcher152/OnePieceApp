import { ShipSearchService } from './services/ship-search.service';
import { WeaponService } from './services/weapon.service';
import { ShipService } from './services/ship.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule, MatListItem,
  MatSidenav, MatNavList
} from '@angular/material'; */
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent, SelectedCharacterDialog } from './characters/characters.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { ImageComponent } from './image/image.component';
import { ShipsComponent, SelectedShipDialog } from './ships/ships.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';

import { InMemoryDataService } from './services/in-memory-data.service';
import { CharacterService } from './services/character.service';
import { CharacterSearchService } from './services/character-search.service';
import { ImageService } from './services/image.service';


// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { WeaponsComponent, SelectedWeaponDialog } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { ShipSearchComponent } from './ship-search/ship-search.component';



@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharactersComponent,
    CharacterSearchComponent,
    SelectedCharacterDialog,
    DashboardComponent,
    ImageComponent,
    ShipsComponent,
    ShipDetailComponent,
    SelectedShipDialog,
    WeaponsComponent,
    WeaponDetailComponent,
    SelectedWeaponDialog,
    ShipSearchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
     MaterialModule , BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatListModule, MatDialogModule, MatTabsModule, MatDividerModule
  ],
  providers: [CharacterService, CharacterSearchService, MatDialog, ImageService, ShipService, ShipSearchService, WeaponService],
  bootstrap: [AppComponent],
  entryComponents: [SelectedCharacterDialog, SelectedShipDialog, SelectedWeaponDialog]
})
export class AppModule { }
