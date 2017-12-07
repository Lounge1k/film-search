import { Component } from '@angular/core';
import { RestClientService } from './core/rest-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  constructor(private _restCLient: RestClientService) {}
  public showMovie() {
    this._restCLient.getMovie(this.title).subscribe((res) => {
      console.log(res);
    });
  }
}
