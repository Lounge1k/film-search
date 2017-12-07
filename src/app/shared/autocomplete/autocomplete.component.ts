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
  public req: string;
  public options: Movie[];
  public myCollection;

  @Output()
  public onCollectionUpdate: EventEmitter<any> = new EventEmitter();

  constructor(
    private _restClient: RestClientService,
    private _localStorageService: CoolLocalStorage
  ) {
    this.myCollection = this._localStorageService.getObject('collection') || {};
  }

  public getMovies(e): void {
    // TODO add debounce time
    this._restClient.getMovie(e).subscribe(
      (res: Movie[]) => {
        this.options = res;
      },
      err => {
        this.options = null;
      }
    )
  }

  public sendToCollection(e, option: Movie): void {
    e.stopPropagation();
    this.onCollectionUpdate.emit({option});
    this.myCollection = this._localStorageService.getObject('collection');
  }

}
