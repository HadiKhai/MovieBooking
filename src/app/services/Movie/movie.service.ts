import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get("server/movieEvent");
  }

  getMoviesAdmin() {
    return this.http.get("server/admin/movies");
  }
  getMovie(id: number) {
    return this.http.get("server/admin/movies/" + id);
  }
  getMovieRatingAvg(id) {
    return this.http.get("server/movies/" + id + "/movieAvgRatings");
  }

  getMovieEvent(cinemaId: number, roomId: number) {
    return this.http.get(
      "server/admin/showing/cinemas/" + cinemaId + "/rooms/" + roomId
    );
  }

  getMovieRating(id: number) {
    return this.http.get("/server/admin/movies/" + id + "/movieRatings");
  }
  createMovie(movie) {
    let body = JSON.stringify(movie);
    console.dir("created");
    return this.http.post("/server/admin/movies", body, httpOptions);
  }
  createMovieEvent(time, cinemaId, roomId, movieId) {
    let body = JSON.stringify(time);
    console.dir("created");
    return this.http.post(
      "server/admin/showing/cinemas/" +
        cinemaId +
        "/rooms/" +
        roomId +
        "/movies/" +
        movieId,
      body,
      httpOptions
    );
  }
  createRating(movieId, userId, form) {
    return this.http.post(
      "server/movies/" + movieId + "/ratings/" + userId,
      form,
      httpOptions
    );
  }
  editMovie(movie, id) {
    let body = JSON.stringify(movie);
    return this.http.put("/server/admin/movies/" + id, body, httpOptions);
  }
  deleteMovie(id: number) {
    return this.http.delete("/server/admin/movies/" + id);
  }

  deleteMovieEvent(cinemaId, roomId, movieId, movieEventId) {
    return this.http.delete(
      "server/admin/showing/cinemas/" +
        cinemaId +
        "/rooms/" +
        roomId +
        "/movies/" +
        movieId +
        "/movieEvents/" +
        movieEventId
    );
  }
}
