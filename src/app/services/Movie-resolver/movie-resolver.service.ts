import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "../Movie/movie.service";

@Injectable({
  providedIn: "root"
})
export class MovieResolverService implements Resolve<any> {
  public movie;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    return this.movieService.getMovie(id);
  }

  constructor(private movieService: MovieService) {}
}
