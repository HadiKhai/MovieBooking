import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cinema",
  templateUrl: "./cinema.component.html",
  styleUrls: ["./cinema.component.css"]
})
export class CinemaComponent implements OnInit {
  lat = 40.73061;
  lng = -73.935242;
  constructor() {}

  ngOnInit() {}
}
