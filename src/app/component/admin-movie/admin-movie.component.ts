import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { MovieService } from "src/app/services/Movie/movie.service";

@Component({
  selector: "app-admin-movie",
  templateUrl: "./admin-movie.component.html",
  styleUrls: ["./admin-movie.component.css"]
})
export class AdminMovieComponent implements OnInit {
  public movies;
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
  constructor(
    private movieservice: MovieService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
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
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  ngOnInit() {
    this.getMovies();
    console.dir(this.movies);
    this.movieForm = new FormGroup({
      movieName: new FormControl("", Validators.required),
      movieDescription: new FormControl("", Validators.required),
      movieDirectors: new FormControl("", Validators.required),
      movieDuration: new FormControl("", Validators.required),
      movieGenre: new FormControl("", Validators.required),
      movieReleaseDate: new FormControl("YYYY-MM-DD", Validators.required),
      movieStars: new FormControl("", Validators.required),
      movieUrlImage: new FormControl("", Validators.required),
      movieUrlPosterImage: new FormControl("", Validators.required)
    });
  }

  submitRegistration() {
    console.dir(this.movieForm.valid);
    if (this.movieForm.valid) {
      this.validMessage = "Your Movie has been added!";
      this.movieservice.createMovie(this.movieForm.value).subscribe(
        data => {
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
  currentRate = 3.14;

  deleteMovie(id: number) {
    this.movieservice.deleteMovie(id).subscribe(data => {
      console.log("success");
    });
    this.router.navigateByUrl("/admin/movie");
  }
  getMovies() {
    this.movieservice.getMoviesAdmin().subscribe(
      data => {
        this.movies = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
  closeResult: string;

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
