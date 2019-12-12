import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  navb;
  public isMenuCollapsed = true;
  constructor(private router: Router, private modalService: NgbModal) {
    router.events.subscribe(val => {
      this.val = val;
    });
  }

  ngOnInit() {
    console.dir(this.val);
  }
  setClass() {
    if (this.position >= 100) {
    } else {
    }
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


