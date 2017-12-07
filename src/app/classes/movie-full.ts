import Movie from './movie'

export default class MovieFull extends Movie{
  public rated: string;
  public released: string;
  public runtime: string;
  public genre: string;
  public director: string;
  public writer: string;
  public actors: string;
  public plot: string;
  public language: string;
  public country: string;
  public awards: string;
  public metascore: string;
  public imdbRating: string;
  public imdbVotes: string;
  public dvd: string;
  public boxOffice: string;
  public production: string;
  public website: string;
  public response: string;

  constructor(){
    super();
  }


  public init(data): void {
    super.init(data);
    this.rated = data['Rated'];
    this.released = data['Released'];
    this.runtime = data['Runtime'];
    this.director = data['Director'];
    this.writer = data['Writer'];
    this.actors = data['Actors'];
    this.plot = data['Plot'];
    this.language = data['Language'];
    this.country = data['Country'];
    this.awards = data['Awards'];
    this.metascore = data['Metascore'];
    this.imdbRating = data['imdbRating'];
    this.imdbVotes = data['imdbVotes'];
    this.dvd = data['DVD'];
    this.boxOffice = data['BoxOffice'];
    this.production = data['Production'];
    this.website = data['Website'];
    this.response = data['Response'];
    this.genre = data['Genre'];
  }

  static fromJs(data): MovieFull {
    let result = new MovieFull();
    result.init(data);
    return result
  }
}
