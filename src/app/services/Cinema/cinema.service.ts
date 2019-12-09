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
  createCinema(cinema) {
    let body = JSON.stringify(cinema);
    return this.http.post("/server/admin/cinemas", body, httpOptions);
  }
  deleteCinema(id: number) {
    return this.http.delete("/server/admin/cinemas/" + id);
  }
}
