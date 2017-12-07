import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/search",
    pathMatch: 'full'
  },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', redirectTo: '/search' }
];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
