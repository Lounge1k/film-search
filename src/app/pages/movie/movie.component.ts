import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../../core/rest-client.service';
import { ActivatedRoute } from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';
import MovieFull from '../../classes/movie-full';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  //movie id
  private _id: string;

  //full movie info
  public movieInfo: MovieFull;

  //list of full movie proprties name
  public keys: string[];

  //error
  public error: Error;

  //list of added movies
  public myCollection;

  constructor(
    private _route: ActivatedRoute,
    private _restClient: RestClientService,
    private _localStorage: CoolLocalStorage
  ) {
    this.myCollection = this._localStorage.getObject('collection') || {};
    this._route.params.subscribe(params => {
      this._id = params['id'];
    });
  };

  ngOnInit() {
    this._getMovie();
  }

  //add movie to collection
  public addToCollection(movieInfo: MovieFull): void {
    this.myCollection[movieInfo.imdbID] = movieInfo;
    this._localStorage.setObject('collection', this.myCollection);
  }

  //remove movie from collection
  public removeFromCollection(movieInfo: MovieFull): void {
    delete this.myCollection[movieInfo.imdbID];
    this._localStorage.setObject('collection', this.myCollection);
  }

  //get info about movie
  private _getMovie(): void {
    this._restClient.getMovieById(this._id).subscribe(
      (res: MovieFull) => {
        this.movieInfo = res;
        this.keys = Object.keys(this.movieInfo);
      },
      (err) => {
        this.error = err.Error || 'unknown';
      }
    )
  }
}
