import { Component } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public myCollection;
  public myCollectionKeys = [];
  private _localStorage: CoolLocalStorage;

  constructor(
  private localStorage: CoolLocalStorage
  ) {
    this._localStorage = localStorage;
    this.myCollection = this._localStorage.getObject('collection') || {};
    this.myCollectionKeys = Object.keys(this.myCollection);
  }

  public updateCollection($event): void {
    const movie = $event.option;
    this.myCollection[movie.imdbID] = movie;
    this._updateLocalStorage()
  }

  public removeFromCollection(e, id): void {
    e.preventDefault();
    delete this.myCollection[id];
    this._updateLocalStorage()
  }

  private _updateLocalStorage(): void {
    this._localStorage.setObject('collection', this.myCollection);
    this.myCollectionKeys = Object.keys(this.myCollection);
  }

}
