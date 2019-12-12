import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { MovieService } from "src/app/services/Movie/movie.service";

@Component({
  selector: "app-admin-movie-edit",
  templateUrl: "./admin-movie-edit.component.html",
  styleUrls: ["./admin-movie-edit.component.css"]
})
export class AdminMovieEditComponent implements OnInit {
  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.mySubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }
  public movie;
  isShow = true;
  movieForm: FormGroup;
  movieGenreO: string[] = [
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Historical",
    "Horror",
    "Magical realism",
    "Mystery",
    "Paranoid fiction",
    "Philosophical",
    "Political",
    "Romance",
    "Saga",
    "Satire",
    "Science fiction",
    "Social",
    "Speculative",
    "Thriller",
    "Urban",
    "Western"
  ];
  mySubscription: any;
  validMessage: string = "";
  id;
  closeResult: string;

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.route.data.subscribe(
      (data: { movie: any }) => (this.movie = data.movie)
    );

    console.dir(this.id);
    this.movieForm = new FormGroup({
      movieName: new FormControl(this.movie.movieName, Validators.required),
      movieDescription: new FormControl(
        this.movie.movieDescription,
        Validators.required
      ),
      movieDirectors: new FormControl(
        this.movie.movieDirectors,
        Validators.required
      ),
      movieDuration: new FormControl(
        this.movie.movieDuration,
        Validators.required
      ),
      movieGenre: new FormControl(this.movie.movieGenre, Validators.required),
      movieReleaseDate: new FormControl(
        this.movie.movieReleaseDate,
        Validators.required
      ),
      movieStars: new FormControl(this.movie.movieStars, Validators.required),
      movieUrlImage: new FormControl(
        this.movie.movieUrlImage,
        Validators.required
      ),
      movieUrlPosterImage: new FormControl(
        this.movie.movieUrlPosterImage,
        Validators.required
      )
    });
  }

  submitRegistration() {
    console.dir(this.movieForm.valid);
    if (this.movieForm.valid) {
      this.validMessage = "Your Movie has been updated!";
      this.movieservice.editMovie(this.movieForm.value, this.id).subscribe(
        () => {
          this.movieForm.reset();
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
    this.router.navigateByUrl("/admin/movie");
  }
  getMoviebyId(id) {
    this.movieservice.getMovie(id).subscribe(
      data => {
        this.movie = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
