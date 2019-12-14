import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { SeatService } from "src/app/services/Seats/seat.service";
import { LoginService } from "src/app/services/Login/login.service";
import { BookingService } from "src/app/services/Booking/booking.service";

@Component({
  selector: "app-movie-cinemas-rooms-seats",
  templateUrl: "./movie-cinemas-rooms-seats.component.html",
  styleUrls: ["./movie-cinemas-rooms-seats.component.css"]
})
export class MovieCinemasRoomsSeatsComponent implements OnInit {
  movieId;
  cinemaId;
  roomId;
  seats;
  seatsArray: any[];
  seatsArraySorted: any[][];
  imgSrc: string = "../assets/img/seat.png";
  seatId;
  movie_event;
  seatsBooleanArray = [];
  user;
  row;
  column;
  ticketPrice;
  showDetails = false;
  loginCondition = false;
  error = "Please Login First!";
  warning = false;
  message = "";
  mySubscription;
  constructor(
    private seatService: SeatService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private bookingService: BookingService,
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
    this.movieId = this.route.snapshot.params.id;
    this.cinemaId = this.route.snapshot.params.id2;
    this.roomId = this.route.snapshot.params.id3;
    this.movie_event = this.route.snapshot.params.id4;
    this.route.data.subscribe(
      (data: { seats: any }) => (this.seats = data.seats)
    );
    this.distributeSeats();
    this.user = this.loginService.getUser();
    console.log(this.user);
  }
  distributeSeats() {
    this.seatsArray = Array.of(this.seats);
    this.seatsArray = this.seatsArray[0];
    this.seatsArraySorted = [];
    console.log(this.seatsArraySorted);
    const size = this.seats.length;
    if (size === 100) {
      for (let i = 0; i < 10; i++) {
        this.seatsArraySorted[i] = [];
        for (let j = 0; j < 10; j++) {
          this.seatsArraySorted[i][j] = this.seatsArray[i * 10 + j];
        }
      }
    }
    if (size === 50) {
      for (let i = 0; i < 5; i++) {
        this.seatsArraySorted[i] = [];
        for (let j = 0; j < 10; j++) {
          this.seatsArraySorted[i][j] = this.seatsArray[i * 10 + j];
        }
      }
    }
    console.log(this.seatsArray[101]);
    if (size === 200) {
      for (let i = 0; i < 10; i++) {
        this.seatsArraySorted[i] = [];
        for (let j = 0; j < 20; j++) {
          this.seatsArraySorted[i][j] = this.seatsArray[i * 20 + j];
        }
      }
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.seatsArray.length; i++) {
      this.seatsBooleanArray.push(false);
    }
  }
  toggleComponent(id, seatStatus, seatRow, seatColumn, ticketPrice) {
    if (!seatStatus) {
      let index;
      for (let i = 0; i < this.seatsArray.length; i++) {
        if (id === this.seatsArray[i].seatId) {
          index = i;
        }
      }
      if (this.seatsBooleanArray[index] === true) {
        this.seatsBooleanArray[index] = false;
        this.showDetails = false;
      } else {
        for (let i = 0; i < this.seatsBooleanArray.length; i++) {
          this.seatsBooleanArray[i] = false;
        }
        this.seatsBooleanArray[index] = true;
        this.seatId = id;
        this.row = seatRow + 1;
        this.column = seatColumn + 1;
        this.ticketPrice = ticketPrice;
        this.showDetails = true;
        console.log(
          "Id: " +
            this.seatId +
            " Row: " +
            this.row +
            " Column: " +
            this.column +
            " Ticket: " +
            this.ticketPrice
        );
      }
    }
  }
  toggleC(seatId) {
    let index;
    for (let i = 0; i < this.seatsArray.length; i++) {
      if (seatId === this.seatsArray[i].seatId) {
        index = i;
      }
    }
    return this.seatsBooleanArray[index];
  }
  reserveSeat() {
    this.user = this.loginService.getUser();
    if (this.user === undefined || this.user === null) {
      this.loginCondition = true;
    } else {
      this.loginCondition = false;
      if (this.showDetails) {
        this.bookingService
          .bookSeat(
            this.movieId,
            this.cinemaId,
            this.movie_event,
            this.roomId,
            this.seatId,
            this.user.customerId,
            this.ticketPrice
          )
          .subscribe(
            data => {
              this.message = "Successfully Booked";
              this.router.navigateByUrl(
                "/movies/" +
                  this.movieId +
                  "/cinemas/" +
                  this.cinemaId +
                  "/rooms/" +
                  this.roomId +
                  "/movie_event/" +
                  this.movie_event +
                  "/seats"
              );
            },
            err => {
              console.error(err.error.text);
              if (err.error.text === "Reserved!") {
                this.message = "Successfully Booked";
                this.router.navigateByUrl(
                  "/movies/" +
                    this.movieId +
                    "/cinemas/" +
                    this.cinemaId +
                    "/rooms/" +
                    this.roomId +
                    "/movie_event/" +
                    this.movie_event +
                    "/seats"
                );
              } else {
                this.message = "Error: " + err.error[1];
              }
            },
            () => console.log("Booked")
          );
      }
    }
  }
  close() {
    this.loginCondition = false;
  }
}
