import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/Movie/movie.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-admin-movie-event-cinemas-rooms",
  templateUrl: "./admin-movie-event-cinemas-rooms.component.html",
  styleUrls: ["./admin-movie-event-cinemas-rooms.component.css"]
})
export class AdminMovieEventCinemasRoomsComponent implements OnInit {
  cinemaId;
  roomId;
  movies;
  movieIds;
  movieForm: FormGroup;
  closeResult: string;
  isShow = true;
  mySubscription: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
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
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
    this.cinemaId = this.route.snapshot.params.id;
    this.roomId = this.route.snapshot.params.id2;
    this.getMovies();
    this.getMovieEvent(this.cinemaId, this.roomId);
    this.movieForm = new FormGroup({
      movieId: new FormControl("", Validators.required),
      movieStartTime: new FormControl("", Validators.required),
      movieEndTime: new FormControl("", Validators.required)
    });
  }
  getMovieEvent(cinemaId, roomId) {
    this.movieService.getMovieEvent(cinemaId, roomId).subscribe(
      data => {
        this.movies = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
  getMovies() {
    this.movieService.getMovies().subscribe(
      data => {
        this.movieIds = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  deleteMovieEvent(cinemaId, roomId, movieId, movieEventId) {
    this.movieService
      .deleteMovieEvent(cinemaId, roomId, movieId, movieEventId)
      .subscribe(data => {
        console.log("success");
      });
    this.router.navigateByUrl(
      "/admin/showing/cinemas/" +
        this.cinemaId +
        "/rooms/" +
        this.roomId +
        "/movies"
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
