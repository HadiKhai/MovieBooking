import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/Movie/movie.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-admin-movie-event-times",
  templateUrl: "./admin-movie-event-times.component.html",
  styleUrls: ["./admin-movie-event-times.component.css"]
})
export class AdminMovieEventTimesComponent implements OnInit {
  cinemaId;
  roomId;
  movieId;
  timeForm: FormGroup;
  constructor(
    private MovieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cinemaId = this.route.snapshot.params.id;
    this.roomId = this.route.snapshot.params.id2;
    this.movieId = this.route.snapshot.params.id3;
    this.timeForm = new FormGroup({
      movieStartTime: new FormControl("YYYY-MM-DD", Validators.required),
      movieEndTime: new FormControl("", Validators.required)
    });
  }
  validMessage;
  submitRegistration() {
    console.dir(this.timeForm.valid);
    if (this.timeForm.valid) {
      this.validMessage = "Your Movie has been added!";
      this.MovieService.createMovieEvent(
        this.timeForm.value,
        this.cinemaId,
        this.roomId,
        this.movieId
      ).subscribe(
        data => {
          this.timeForm.reset();
          return true;
        },

        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage =
        "Please Fill the missing information in the form before submitting";
    }
    this.router.navigateByUrl(
      "/admin/showing/cinemas/" +
        this.cinemaId +
        "/rooms/" +
        this.roomId +
        "/movies"
    );
  }
}
