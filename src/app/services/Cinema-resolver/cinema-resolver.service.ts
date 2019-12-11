import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { CinemaService } from "../Cinema/cinema.service";

@Injectable({
  providedIn: "root"
})
export class CinemaResolverService implements Resolve<any> {
  public cinema;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    return this.cinemaService.getCinemasFromMovie(id);
  }

  constructor(private cinemaService: CinemaService) {}
}
