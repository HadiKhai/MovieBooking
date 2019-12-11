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
    return this.seatsService.getSeats(id2, id3);
  }

  constructor(private seatsService: SeatService) {}
}
