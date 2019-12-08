import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/app/services/Movie/movie.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.sass", "./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  movie;
  showAllTimes = false;
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.getMovieById(this.route.snapshot.params.id);
  }

  getMovieById(id: number) {
    console.log(id);
    this.movieService.getMovie(id).subscribe(
      data => {
        this.movie = data;
      },
      err => console.error(err),
      () => console.log("Movie Loaded")
    );
  }
  // show all showtimes
  showAllShowtimes(): void {
    this.showAllTimes = true;
  }

  // hide all showtimes
  hideAllShowtimes(): void {
    this.showAllTimes = false;
  }
}
