import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { CinemaService } from "src/app/services/Cinema/cinema.service";

@Component({
  selector: "app-admin-cinema",
  templateUrl: "./admin-cinema.component.html",
  styleUrls: ["./admin-cinema.component.css"]
})
export class AdminCinemaComponent implements OnInit {
  public cinemas;
  isShow = true;
  cinemaForm: FormGroup;
  warning = false;
  validMessage: string = "";
  mySubscription: any;
  error;
  constructor(
    private cinemaservice: CinemaService,
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
    this.getCinemas();
    console.dir(this.cinemas);
    this.cinemaForm = new FormGroup({
      cinemaName: new FormControl("", Validators.required),
      cinemaAddress: new FormControl("", Validators.required),
      cinemaPhone: new FormControl("", Validators.required),
      cinemaManager: new FormControl("", Validators.required),
      cinemaSeatCapacity: new FormControl("", Validators.required)
    });
  }

  submitRegistration() {
    if (this.cinemaForm.valid) {
      this.validMessage = "Your Cinema has been added!";
      this.cinemaservice.createCinema(this.cinemaForm.value).subscribe(
        data => {
          this.cinemaForm.reset();
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
    this.router.navigateByUrl("/admin/cinema");
  }
  deleteCinema(id: number) {
    this.cinemaservice.deleteCinema(id).subscribe(
      data => {
        console.log("success");
        this.router.navigateByUrl("/admin/cinema");
      },
      error => {
        this.error = error.error;
        console.log(this.error);
        this.warning = true;
      },
      () => console.log("data loaded")
    );
  }
  close() {
    this.warning = false;
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
