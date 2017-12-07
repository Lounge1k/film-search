import { Component, Output, EventEmitter } from '@angular/core';
import { RestClientService } from '../../core/rest-client.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import Movie from '../../classes/movie';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  //list of movies from server
  public options: Movie[];

  //list of added movies
  public myCollection;

  @Output()
  public onCollectionUpdate: EventEmitter<any> = new EventEmitter();

  constructor(
    private _restClient: RestClientService,
    private _localStorageService: CoolLocalStorage
  ) {
    this.myCollection = this._localStorageService.getObject('collection') || {};
  }

  //Get movies from server
  //TODO add debounce time
  public getMovies(e): void {
    this._restClient.getMovie(e).subscribe(
      (res: Movie[]) => {
        this.options = res;
      },
      err => {
        this.options = null;
      }
    )
  }

  //Send add event to parent component
  public sendToCollection(e, option: Movie): void {
    e.stopPropagation();
    this.onCollectionUpdate.emit({option});
    this.myCollection = this._localStorageService.getObject('collection');
  }

}
