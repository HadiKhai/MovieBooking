import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { CinemaService } from "../Cinema/cinema.service";
import { SeatService } from "../Seats/seat.service";

@Injectable({
  providedIn: "root"
})
export class SeatsResolverService implements Resolve<any> {
  public seats;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    const id2 = route.params.id2;
    const id3 = route.params.id3;
    const id4 = route.params.id4;

    return this.seatsService.getSeatsByMovieEvent(id, id2, id3, id4);
  }

  constructor(private seatsService: SeatService) {}
}
