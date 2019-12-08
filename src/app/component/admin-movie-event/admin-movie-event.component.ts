import { Component, OnInit } from "@angular/core";
import { CinemaService } from "src/app/services/Cinema/cinema.service";

@Component({
  selector: "app-admin-movie-event",
  templateUrl: "./admin-movie-event.component.html",
  styleUrls: ["./admin-movie-event.component.css"]
})
export class AdminMovieEventComponent implements OnInit {
  cinemas;
  constructor(private cinemaservice: CinemaService) {}

  ngOnInit() {
    this.getCinemas();
  }

  getCinemas() {
    this.cinemaservice.getCinemas().subscribe(
      data => {
        this.cinemas = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
