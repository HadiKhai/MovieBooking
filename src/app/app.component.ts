import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginService } from "./services/Login/login.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class AppComponent {
  title = "CinemaBookingRAH";
  val;
  position;
  loginForm: FormGroup;
  navb;
  usernameLogin = "";
  passwordLogin = "";
  userLogin;
  userIsAdmin;
  adminLogin;
  loggedIn = false;
  isAdmin = false;
  public isMenuCollapsed = true;
  constructor(
    private loginservice: LoginService,
    private router: Router,
    private modalService: NgbModal
  ) {
    router.events.subscribe(val => {
      this.val = val;
    });
  }

  ngOnInit() {
    this.userLogin = this.loginservice.getUser();
    this.adminLogin = new FormGroup({
      customerAddress: new FormControl("", Validators.required),
      customerEmail: new FormControl("", Validators.required),
      customerFirstName: new FormControl("", Validators.required),
      customerGender: new FormControl("", Validators.required),
      customerLastName: new FormControl("", Validators.required),
      customerPassword: new FormControl("YYYY-MM-DD", Validators.required),
      customerPhone: new FormControl("", Validators.required),
      customerUsername: new FormControl("", Validators.required)
    });
    if (this.userLogin === undefined) {
      console.log(this.userLogin);
    }
    this.loggedIn = this.loginservice.isLoggedIn();
    this.isAdmin = this.loginservice.isAdmin();

    if (this.loggedIn) {
      this.userLogin = this.loginservice.getUser();
      this.adminLogin = this.loginservice.getAdmin();
      this.userIsAdmin = this.loginservice.isAdmin();
    }
  }
  setClass() {
    if (this.position >= 100) {
    } else {
    }
  }
  logout() {
    this.loginservice.logoutUser();
    this.loggedIn = this.loginservice.isLoggedIn();
    this.isAdmin = this.loginservice.isAdmin();
    this.usernameLogin = "";
    this.passwordLogin = "";
    this.adminLogin = null;
  }
  login() {
    this.loginservice.signIn(this.usernameLogin, this.passwordLogin).subscribe(
      data => {
        this.userLogin = data;
        this.adminLogin = null;
        this.loggedIn = true;
        this.loginservice.setUser(true, data);
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
  loginAsAdmin() {
    this.loginservice
      .signInAdmin(this.usernameLogin, this.passwordLogin)
      .subscribe(
        data => {
          this.adminLogin = data;
          this.userLogin = null;
          this.loggedIn = true;
          this.isAdmin = true;
          this.loginservice.setAdmin(true, data);
        },
        error => console.log(error),
        () => console.log("data loaded")
      );
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    this.position = window.pageYOffset;
    console.log(this.navb);
    if (this.position >= 150) {
      this.navb = true;
    } else {
      this.navb = false;
    }
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
