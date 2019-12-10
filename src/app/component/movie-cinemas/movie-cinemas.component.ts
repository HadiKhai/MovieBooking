import { Component, OnInit, Input } from "@angular/core";
import { CinemaService } from "src/app/services/Cinema/cinema.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-cinemas",
  templateUrl: "./movie-cinemas.component.html",
  styleUrls: ["./movie-cinemas.component.sass"]
})
export class MovieCinemasComponent implements OnInit {
  cinemas;
  id;
  cinemaId;
  toggle = true;
  constructor(
    private cinemaService: CinemaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getCinemas(this.id);
  }
  getCinemas(id) {
    this.cinemaService.getCinemasFromMovie(id).subscribe(
      data => {
        this.cinemas = data;
      },
      err => console.error(err),
      () => console.log("Cinema Loaded")
    );
  }
  toggleComponent() {
    this.toggle = !this.toggle;
  }
  cinemaSave(id) {
    this.cinemaId = id;
  }
}
