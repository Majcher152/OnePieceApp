import { ImageService } from './services/image.service';
import { CharacterSearchService } from './services/character-search.service';
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
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent, SelectedCharacterDialog } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CharacterService } from './services/character.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { ImageComponent } from './image/image.component';

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


@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharactersComponent,
    DashboardComponent,
    CharacterSearchComponent,
    SelectedCharacterDialog,
    ImageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
     MaterialModule , BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatListModule, MatDialogModule, MatTabsModule, MatDividerModule
  ],
  providers: [CharacterService, CharacterSearchService, MatDialog, ImageService],
  bootstrap: [AppComponent],
  entryComponents: [SelectedCharacterDialog]
})
export class AppModule { }
