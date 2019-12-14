import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class BookingService {
  constructor(private http: HttpClient) {}
  getBookingByUser(id) {
    return this.http.get("/server/bookings/" + id);
  }
  bookSeat(
    movieId,
    cinemaId,
    movieEventId,
    roomId,
    seatId,
    userId,
    ticketPrice
  ) {
    return this.http.post(
      "server/booking/movies/" +
        movieId +
        "/cinemas/" +
        cinemaId +
        "/movieEvents/" +
        movieEventId +
        "/rooms/" +
        roomId +
        "/seats/" +
        seatId +
        "/user/" +
        userId +
        "/tickets/" +
        ticketPrice,
      httpOptions
    );
  }
}
