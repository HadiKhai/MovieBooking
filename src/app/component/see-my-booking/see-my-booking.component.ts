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
  arrayOfBookings: any[];
  arrayOfDate = [];
  arrayOfYears = [];
  arrayOfMonths = [];
  arrayOfDays = [];
  arrayOfTimes = [];
  arrayOfHours = [];
  arrayOfMinutes = [];
  arrayOfSeconds = [];
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
    this.arrayOfBookings = Array.of(this.Bookings);
    this.arrayOfBookings = this.arrayOfBookings[0];
    const size = this.arrayOfBookings.length;
    for (let i = 0; i < size; i++) {
      this.arrayOfYears.push(
        this.arrayOfBookings[i].movieStartTime.substring(0, 4)
      );
      this.arrayOfMonths.push(
        this.arrayOfBookings[i].movieStartTime.substring(5, 7)
      );
      this.arrayOfDays.push(
        this.arrayOfBookings[i].movieStartTime.substring(8, 10)
      );
      this.arrayOfHours.push(
        this.arrayOfBookings[i].movieStartTime.substring(11, 13)
      );
      this.arrayOfMinutes.push(
        this.arrayOfBookings[i].movieStartTime.substring(14, 16)
      );
      this.arrayOfSeconds.push(
        this.arrayOfBookings[i].movieStartTime.substring(17, 19)
      );
      this.arrayOfDate.push(
        new Date(
          this.arrayOfYears[i],
          this.arrayOfMonths[i] - 1,
          this.arrayOfDays[i],
          this.arrayOfHours[i],
          this.arrayOfMinutes[i],
          this.arrayOfSeconds[i]
        )
      );
    }

    console.log(this.arrayOfDate);
  }

  getDay(id) {
    let index;
    for (let i = 0; i < this.arrayOfBookings.length; i++) {
      if (id === this.arrayOfBookings[i].bookingId) {
        index = i;
      }
    }
    return this.arrayOfDate[index].toString().substring(0, 3);
  }
  getDayNum(id) {
    let index;
    for (let i = 0; i < this.arrayOfBookings.length; i++) {
      if (id === this.arrayOfBookings[i].bookingId) {
        index = i;
      }
    }
    return this.arrayOfDate[index].toString().substring(8, 10);
  }
  getMonth(id) {
    let index;
    for (let i = 0; i < this.arrayOfBookings.length; i++) {
      if (id === this.arrayOfBookings[i].bookingId) {
        index = i;
      }
    }
    return this.arrayOfDate[index].toString().substring(4, 7);
  }

  getTime(id) {
    let index;
    for (let i = 0; i < this.arrayOfBookings.length; i++) {
      if (id === this.arrayOfBookings[i].bookingId) {
        index = i;
      }
    }
    return this.arrayOfDate[index].toString().substring(16, 21);
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
