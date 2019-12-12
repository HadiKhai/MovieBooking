import { Component, OnInit, Input } from "@angular/core";
import { RoomService } from "src/app/services/Room/room.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-cinemas-rooms",
  templateUrl: "./movie-cinemas-rooms.component.html",
  styleUrls: ["./movie-cinemas-rooms.component.sass"]
})
export class MovieCinemasRoomsComponent implements OnInit {
  @Input() cinemaId;
  rooms;
  movieId;
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    this.getRooms(this.movieId, this.cinemaId);
    console.log(this.cinemaId);
  }
  ngOnChanges() {
    console.log(this.cinemaId);
    this.movieId = this.route.snapshot.params.id;

    this.getRooms(this.movieId, this.cinemaId);
  }
  getRooms(movieId, cinemaId) {
    this.roomService.getRoomByCinemaIdAndMovieId(movieId, cinemaId).subscribe(
      data => {
        this.rooms = data;
      },
      err => console.error(err),
      () => console.log("Cinema Loaded")
    );
  }
}
