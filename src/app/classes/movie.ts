export default class Movie {
  public poster: string;
  public title: string;
  public type: string;
  public year: string;
  public imdbID: string;

  public init(data): void {
    this.title = data['Title'];
    this.type = data['Type'];
    this.year = data['Year'];
    this.imdbID = data['imdbID'];
    data['Poster'] === 'N/A' ? this.poster = '/assets/movie-poster.jpg' : this.poster = data['Poster'];
  }

  static fromJs(data): Movie {
    let result = new Movie();
    result.init(data);
    return result;
  }
}
