import { Component } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  //list of added movies
  public myCollection;

  //list of added movies ids
  public myCollectionKeys = [];

  constructor(
  private _localStorage: CoolLocalStorage
  ) {
    this.myCollection = this._localStorage.getObject('collection') || {};
    this.myCollectionKeys = Object.keys(this.myCollection);
  }

  //handle add event from autocomplete and add movie to collection
  public updateCollection($event): void {
    const movie = $event.option;
    this.myCollection[movie.imdbID] = movie;
    this._updateLocalStorage()
  }

  //remove movie from collection
  public removeFromCollection(e, id): void {
    e.preventDefault();
    delete this.myCollection[id];
    this._updateLocalStorage()
  }

  //update localStorage variable in event
  private _updateLocalStorage(): void {
    this._localStorage.setObject('collection', this.myCollection);
    this.myCollectionKeys = Object.keys(this.myCollection);
  }

}
