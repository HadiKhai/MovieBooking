import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";

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
  constructor(private router: Router) {
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
}
