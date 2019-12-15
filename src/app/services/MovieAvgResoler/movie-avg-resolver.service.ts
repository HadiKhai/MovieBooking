import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "../Movie/movie.service";

@Injectable({
  providedIn: "root"
})
export class MovieAvgResolverService {
  public movie;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    return this.movieService.getMovieRatingAvg(id);
  }

  constructor(private movieService: MovieService) {}
}
