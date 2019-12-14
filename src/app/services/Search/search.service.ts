import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpClient) {}
  getMovie(search) {
    return this.http.get("server/movies/" + search);
  }
}
