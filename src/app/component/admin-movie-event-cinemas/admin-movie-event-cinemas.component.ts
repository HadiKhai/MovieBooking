import { Component, OnInit } from "@angular/core";
import { RoomService } from "src/app/services/Room/room.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-admin-movie-event-cinemas",
  templateUrl: "./admin-movie-event-cinemas.component.html",
  styleUrls: ["./admin-movie-event-cinemas.component.css"]
})
export class AdminMovieEventCinemasComponent implements OnInit {
  rooms;
  cinemaId;
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cinemaId = this.route.snapshot.params.id;
    console.log(this.cinemaId);
    this.getrooms(this.cinemaId);
  }
  getrooms(cinemaId) {
    this.roomService.getRoom(cinemaId).subscribe(
      data => {
        this.rooms = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
