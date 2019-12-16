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
export class AllCinemaResolverService implements Resolve<any> {
  public cinema;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.cinemaService.getCinemas();
  }

  constructor(private cinemaService: CinemaService) {}
}
