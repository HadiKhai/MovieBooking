import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class CinemaService {
  private cinemaUrl = "api/cinemas";
  constructor(private http: HttpClient) {}

  getCinemas() {
    return this.http.get("server/admin/cinemas");
  }
  getCinemasFromMovie(id) {
    return this.http.get("server/booking/movies/" + id);
  }
  getCinemasById(id) {
    return this.http.get("server/cinemas/" + id);
  }

  getCinemaLocation(address) {
    return this.http.get(
      "https://us1.locationiq.com/v1/search.php?key=7b1afa25a36d5a&q=" +
        address +
        "&format=json"
    );
  }
  getCinemaAvgRating(id) {
    return this.http.get("server/cinemas/" + id + "/cinemaAvgRating");
  }
  createCinema(cinema) {
    let body = JSON.stringify(cinema);
    return this.http.post("/server/admin/cinemas", body, httpOptions);
  }
  createRating(cinemaId, userId, form) {
    return this.http.post(
      "server/cinemas/" + cinemaId + "/customers/" + userId + "/cinemaRatings",
      form,
      httpOptions
    );
  }
  deleteCinema(id: number) {
    return this.http.delete("/server/admin/cinemas/" + id);
  }
}
