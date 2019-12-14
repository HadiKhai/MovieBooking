import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { CinemaService } from "../Cinema/cinema.service";
import { BookingService } from "../Booking/booking.service";

@Injectable({
  providedIn: "root"
})
export class BookingResolverService implements Resolve<any> {
  public cinema;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    return this.bookingService.getBookingByUser(id);
  }

  constructor(private bookingService: BookingService) {}
}
