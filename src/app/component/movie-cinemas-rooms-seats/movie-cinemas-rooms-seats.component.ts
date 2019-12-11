import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SeatService } from "src/app/services/Seats/seat.service";

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
  seatsBooleanArray = [];
  constructor(
    private seatService: SeatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    this.cinemaId = this.route.snapshot.params.id2;
    this.roomId = this.route.snapshot.params.id3;
    this.route.data.subscribe(
      (data: { seats: any }) => (this.seats = data.seats)
    );
    this.distributeSeats();
  }
  distributeSeats() {
    this.seatsArray = Array.of(this.seats);
    this.seatsArray = this.seatsArray[0];
    this.seatsArraySorted = [];
    for (let i = 0; i < 10; i++) {
      this.seatsArraySorted[i] = [];
      if (this.seats.length === 100) {
        for (let j = 0; j < 10; j++) {
          this.seatsArraySorted[i][j] = this.seatsArray[i * 10 + j];
        }
      }
    }
    for (let i = 0; i < this.seatsArray.length; i++) {
      this.seatsBooleanArray.push(false);
    }
    console.log(this.seatsArraySorted);
  }
  toggleComponent(id) {
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
  toggleC(seatId) {
    let index;
    for (let i = 0; i < this.seatsArray.length; i++) {
      if (seatId === this.seatsArray[i].seatId) {
        index = i;
      }
    }
    return this.seatsBooleanArray[index];
  }
  saveSeatId(seatId) {
    this.seatId = seatId;
    console.log(this.seatId);
  }
}
