import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class RoomService {
  constructor(private http: HttpClient) {}
  cinemaId;
  saveCinemaId(cinemaId) {
    this.cinemaId = cinemaId;
  }
  getCinemaId() {
    return this.cinemaId;
  }
  getRoom(id: number) {
    return this.http.get("server/admin/cinemas/" + id + "/rooms");
  }
  getRoomByCinemaIdAndMovieId(movieId, cinemaId) {
    return this.http.get(
      "server/booking/movies/" + movieId + "/cinemas/" + cinemaId
    );
  }
  createRoom(room, cinemaId) {
    let body = JSON.stringify(room);
    return this.http.post(
      "/server/admin/cinemas/" + cinemaId + "/rooms",
      body,
      httpOptions
    );
  }
  deleteRoom(roomId: number, cinemaId) {
    return this.http.delete(
      "/server/admin/cinemas/" + cinemaId + "/rooms/" + roomId
    );
  }
}
