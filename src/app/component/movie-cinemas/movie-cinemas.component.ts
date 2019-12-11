import { Component, OnInit, Input } from "@angular/core";
import { CinemaService } from "src/app/services/Cinema/cinema.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-cinemas",
  templateUrl: "./movie-cinemas.component.html",
  styleUrls: ["./movie-cinemas.component.sass"]
})
export class MovieCinemasComponent implements OnInit {
  cinemas;
  id;
  cinemaId;
  toggle = true;
  cinemasArray: any[];
  cinemasBooleanArrays = [];
  constructor(
    private cinemaService: CinemaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.route.data.subscribe(
      (data: { cinema: any }) => (this.cinemas = data.cinema)
    );
    this.cinemasArray = Array.of(this.cinemas);
    this.cinemasArray = this.cinemasArray[0];
    const size = this.cinemasArray.length;
    console.log(this.cinemasArray);
    for (let i = 0; i < size; i++) {
      this.cinemasBooleanArrays.push(false);
    }
  }
  getCinemas(id) {
    this.cinemaService.getCinemasFromMovie(id).subscribe(
      data => {
        this.cinemas = data;
      },
      err => console.error(err),
      () => console.log("Cinema Loaded")
    );
  }
  toggleComponent(id) {
    let index;
    for (let i = 0; i < this.cinemasArray.length; i++) {
      if (id === this.cinemasArray[i].cinemaId) {
        index = i;
      }
    }
    if (this.cinemasBooleanArrays[index] === true) {
      this.cinemasBooleanArrays[index] = false;
    } else {
      for (let i = 0; i < this.cinemasBooleanArrays.length; i++) {
        this.cinemasBooleanArrays[i] = false;
      }
      this.cinemasBooleanArrays[index] = true;
    }
  }
  toggleC(cinemaId) {
    let index;
    for (let i = 0; i < this.cinemasArray.length; i++) {
      if (cinemaId === this.cinemasArray[i].cinemaId) {
        index = i;
      }
    }
    return this.cinemasBooleanArrays[index];
  }
  seeIfToggled() {
    for (var i = 0; i < this.cinemasBooleanArrays.length; i++) {
      if (this.cinemasBooleanArrays[i] === true) {
        return true;
      }
    }
    return false;
  }
  getCinemaId() {
    return this.cinemaId;
  }
  cinemaSave(id) {
    this.cinemaId = id;
  }
}
