import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SeatService } from "src/app/services/Seats/seat.service";
import { LoginService } from "src/app/services/Login/login.service";

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
  constructor(
    private seatService: SeatService,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}

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
  toggleComponent(id, seatStatus) {
    if (!seatStatus) {
      let index;
      for (let i = 0; i < this.seatsArray.length; i++) {
        if (id === this.seatsArray[i].seatId) {
          index = i;
        }
      }
      if (this.seatsBooleanArray[index] === true) {
        this.seatsBooleanArray[index] = false;
      } else {
        for (let i = 0; i < this.seatsBooleanArray.length; i++) {
          this.seatsBooleanArray[i] = false;
        }
        this.seatsBooleanArray[index] = true;
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
  saveSeatId(seatId, seatStatus) {
    if (!seatStatus) {
      this.seatId = seatId;
      console.log(this.seatId);
    }
  }
}
