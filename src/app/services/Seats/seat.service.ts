import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
}
