import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { MovieService } from "src/app/services/Movie/movie.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.sass", "./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  movie;
  showAllTimes = false;
  id;
  mySubscription: any;

  constructor(
    private sanitizer: DomSanitizer,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.mySubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.route.data.subscribe(
      (data: { movie: any }) => (this.movie = data.movie)
    );

    console.log(this.movie);
  }

  ngOnChanges() {
    this.id = this.route.snapshot.params.id;
    this.getMovieById(this.id);
    console.log(this.movie);
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
