import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/Login/login.service";
import { BookingService } from "src/app/services/Booking/booking.service";

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
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.customerId = this.user.customerId;
    console.log(this.customerId);
    this.getBookingDetails(this.customerId);
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
