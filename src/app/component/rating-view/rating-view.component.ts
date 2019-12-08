import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "src/app/services/Movie/movie.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-rating-view",
  templateUrl: "./rating-view.component.html",
  styleUrls: ["./rating-view.component.css"]
})
export class RatingViewComponent implements OnInit {
  @Input() id: number;
  movieRatings;
  data;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getMovieRating();
  }

  getMovieRating() {
    this.movieService.getMovieRating(this.id).subscribe(
      data => {
        this.movieRatings = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
