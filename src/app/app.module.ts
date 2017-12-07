import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CoolStorageModule } from 'angular2-cool-storage';
import { Routing } from './app.routing';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MatAutocompleteModule, MatInputModule,  MatTableModule, MatButtonModule } from '@angular/material';
import { AutocompleteComponent } from './shared/autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './pages/search/search.component';
import { MovieComponent } from './pages/movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    Routing,
    CoolStorageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
