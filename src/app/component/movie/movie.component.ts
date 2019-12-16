import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { MovieService } from "src/app/services/Movie/movie.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/Login/login.service";
import { Observable } from "rxjs";

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
  movieAvg;
  userRating;
  ratingComment;
  ratingForm: FormGroup;
  user;
  loginCondition = false;
  body;
  RatingFailed = false;
  constructor(
    private sanitizer: DomSanitizer,
    private movieService: MovieService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
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
    this.route.data.subscribe((data: { movie: any; movieAvg: any }) => {
      this.movie = data.movie;
      this.movieAvg = data.movieAvg;
    });
    this.userRating = this.movieAvg;
    console.log(this.movieAvg);
  }
  rateComment() {
    this.user = this.loginService.getUser();
    this.body =
      '{ "movieReviewComment":' +
      '"' +
      this.ratingComment +
      '"' +
      "," +
      '\n "movieReviewRating":' +
      this.userRating +
      "}";
    console.log(this.body);
    this.movieService
      .createRating(this.id, this.user.customerId, this.body)
      .subscribe(
        data => {
          return true;
        },

        error => {
          console.log(error);
          this.RatingFailed = true;
        }
      );
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

  closeResult: string;

  open(content) {
    this.user = this.loginService.getUser();
    console.log(this.user);
    if (this.user === undefined || this.user === null) {
      this.loginCondition = true;
      console.log(this.loginCondition);
    } else {
      this.loginCondition = false;
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
  }
  close() {
    this.loginCondition = false;
  }
  close1() {
    this.RatingFailed = false;
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
