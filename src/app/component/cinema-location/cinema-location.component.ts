import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cinema-location",
  templateUrl: "./cinema-location.component.html",
  styleUrls: ["./cinema-location.component.css"]
})
export class CinemaLocationComponent implements OnInit {
  location;
  lat;
  lon;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: { location: any }) => (this.location = data.location)
    );
    this.location = this.location[0];
    this.lat = parseFloat(this.location.lat);
    this.lon = parseFloat(this.location.lon);
  }
}
