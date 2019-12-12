import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class SeatService {
  constructor(private http: HttpClient) {}

  getSeats(cinemaId, roomId) {
    return this.http.get(
      "server/cinemas/" + cinemaId + "/rooms/" + roomId + "/seats"
    );
  }
  getSeatsByMovieEvent(movieId, cinemaId, roomId, movieEvent) {
    return this.http.get(
      "server/booking/movies/" +
        movieId +
        "/cinemas/" +
        cinemaId +
        "/movieEvents/" +
        movieEvent +
        "/rooms/" +
        roomId
    );
  }
  generateSeats(cinemaId, roomId, roomCapacity) {
    return this.http.post(
      "server/admin/cinemas/" +
        cinemaId +
        "/rooms/" +
        roomId +
        "/" +
        roomCapacity +
        "/seats",
      httpOptions
    );
  }
  deleteSeats(cinemaId, roomId, roomCapacity) {
    return this.http.delete(
      "server/admin/cinemas/" + cinemaId + "/rooms/" + roomId + "/seats"
    );
  }
}
