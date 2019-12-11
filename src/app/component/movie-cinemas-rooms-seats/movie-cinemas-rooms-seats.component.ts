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
          this.seatsArraySorted[i][j] = this.seatsArray[i + j];
        }
      }
    }
    console.log(this.seatsArraySorted);
  }
  printSeatId(seatId) {
    console.log(seatId);
  }
}
