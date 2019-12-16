import { Component, OnInit } from "@angular/core";
import { CinemaService } from "src/app/services/Cinema/cinema.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cinema",
  templateUrl: "./cinema.component.html",
  styleUrls: ["./cinema.component.css"]
})
export class CinemaComponent implements OnInit {
  cinemas;
  cinemasArray;
  cinemasBooleanArrays = [];
  cinemaId;
  constructor(
    private cinemaservice: CinemaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { cinemas: any }) => {
      this.cinemas = data.cinemas;
    });
    this.cinemasArray = Array.of(this.cinemas);
    this.cinemasArray = this.cinemasArray[0];
    const size = this.cinemasArray.length;
    console.log(this.cinemasArray);
    for (let i = 0; i < size; i++) {
      this.cinemasBooleanArrays.push(false);
    }
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
    if (this.cinemas.length !== 0) {
      let index;
      for (let i = 0; i < this.cinemasArray.length; i++) {
        if (cinemaId === this.cinemasArray[i].cinemaId) {
          index = i;
        }
      }
      return this.cinemasBooleanArrays[index];
    }
  }
  cinemaSave(id) {
    this.cinemaId = id;
  }
  getCinemaId() {
    return this.cinemaId;
  }
  seeIfToggled() {
    for (var i = 0; i < this.cinemasBooleanArrays.length; i++) {
      if (this.cinemasBooleanArrays[i] === true) {
        return true;
      }
    }
    return false;
  }
  getCinemas() {
    this.cinemaservice.getCinemas().subscribe(
      data => {
        this.cinemas = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
