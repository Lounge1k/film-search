import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import MovieFull from '../classes/movie-full';
import Movie from '../classes/movie';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestClientService {
  private _key = '7f1a5096';
  private _url = `http://www.omdbapi.com/?apikey=${this._key}&`;

  constructor(
    private _httpClient: HttpClient
  ) {}

  //get movies list from server
  public getMovie(title: string): Observable<Movie[]> {
    return this._httpClient
      .get(this._url + `s=${title}`)
      .flatMap(res => {
        if(res["Response"] !== "False") {
          let result = [];
          for(let mov of res['Search']) {
            result.push(Movie.fromJs(mov));
          }
          return Observable.of(result);
        }else {
          return Observable.throw(res)
        }
      })
      .catch((err: Error) => {
        return Observable.throw(err)
      })
  }

  //get movie full info from server
  public getMovieById(id: string): Observable<MovieFull> {
    return this._httpClient
      .get(this._url + `i=${id}`)
      .flatMap(res => {
        if(res["Response"] !== "False") {
          const result = MovieFull.fromJs(res);
          return Observable.of(result);
        }else{
         return Observable.throw(res);
        }
      })
      .catch((err: Error) => {
        return Observable.throw(err)
      })
  }
}
