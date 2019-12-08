import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";
import { MovieService } from "src/app/services/Movie/movie.service";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-admin-movie-event-cinemas-rooms-movies",
  templateUrl: "./admin-movie-event-cinemas-rooms-movies.component.html",
  styleUrls: ["./admin-movie-event-cinemas-rooms-movies.component.scss"]
})
export class AdminMovieEventCinemasRoomsMoviesComponent implements OnInit {
  cinemaId;
  roomId;
  movies;
  movieIds;
  movieForm: FormGroup;
  closeResult: string;
  isShow = true;

  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel: IgxExpansionPanelComponent;

  public toggleDetails() {
    this.panel.toggle();
  }

  public ngOnInit() {
    this.cinemaId = this.route.snapshot.params.id;
    this.roomId = this.route.snapshot.params.id2;
    this.getMovies();
  }
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) {}

  getMovies() {
    this.movieService.getMoviesAdmin().subscribe(
      data => {
        this.movies = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
