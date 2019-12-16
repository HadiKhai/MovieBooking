import { Component, OnInit, Input } from "@angular/core";
import { CinemaService } from "src/app/services/Cinema/cinema.service";
import { LoginService } from "src/app/services/Login/login.service";

@Component({
  selector: "app-cinema-map",
  templateUrl: "./cinema-map.component.html",
  styleUrls: ["./cinema-map.component.css"]
})
export class CinemaMapComponent implements OnInit {
  @Input() cinemaId;
  cinema;
  lat;
  lon;
  cinemaRating;
  loginCondition = false;
  RatingFailed = false;
  user;
  body;
  userRating;
  ratingComment;
  successfullRating = false;
  locationJson;
  constructor(
    private cinemaservice: CinemaService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getCinemaRating();
    this.getCinema();
  }
  ngOnChanges() {
    this.getCinemaRating();
    this.getCinema();

    console.log(this.cinemaId);
  }
  getCinemaRating() {
    this.cinemaservice.getCinemaAvgRating(this.cinemaId).subscribe(
      data => {
        this.cinemaRating = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
  getCinema() {
    this.cinemaservice.getCinemasById(this.cinemaId).subscribe(
      data => {
        this.cinema = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
  rateComment() {
    this.user = this.loginService.getUser();
    console.log(this.user);
    if (this.user === undefined || this.user === null) {
      this.loginCondition = true;
      console.log(this.loginCondition);
    } else {
      this.loginCondition = false;
      this.body =
        '{ "cinemaRatingComment":' +
        '"' +
        this.ratingComment +
        '"' +
        "," +
        '\n "cinemaReviewRating":' +
        this.userRating +
        "}";
      console.log(this.body);
      this.cinemaservice
        .createRating(this.cinemaId, this.user.customerId, this.body)
        .subscribe(
          data => {
            this.successfullRating = true;
            return true;
          },

          error => {
            console.log(error);
            this.RatingFailed = true;
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
  close2() {
    this.successfullRating = false;
  }
}
