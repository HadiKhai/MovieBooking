import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/Login/login.service";
import { BookingService } from "src/app/services/Booking/booking.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-see-my-booking",
  templateUrl: "./see-my-booking.component.html",
  styleUrls: ["./see-my-booking.component.css"]
})
export class SeeMyBookingComponent implements OnInit {
  user;
  customerId;
  Bookings;
  constructor(
    private loginService: LoginService,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.customerId = this.user.customerId;
    console.log(this.customerId);
    this.route.data.subscribe(
      (data: { bookings: any }) => (this.Bookings = data.bookings)
    );
  }

  getBookingDetails(id) {
    this.bookingService.getBookingByUser(id).subscribe(
      data => {
        this.Bookings = data;
        console.log(this.Bookings);
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
