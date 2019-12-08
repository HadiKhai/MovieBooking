import {
  Component,
  OnInit,
  ViewChild,
  Input,
  SimpleChanges
} from "@angular/core";
import { IgxExpansionPanelComponent, IgxIconService } from "igniteui-angular";

import { Card } from "./card.blueprint";
import { MovieService } from "src/app/services/Movie/movie.service";
@Component({
  selector: "app-movie-card",
  styleUrls: ["./movie-card.component.scss"],
  templateUrl: "./movie-card.component.html"
})
export class MovieCardComponent implements OnInit {
  public movies;
  @Input() id: number;
  @Input() limit: number;
  @Input() columns: number;
  @Input() exclude?: number | number[];
  public cards: Card[];

  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel: IgxExpansionPanelComponent;

  public toggleDetails() {
    this.panel.toggle();
  }

  public ngOnInit() {
    this.getMovies();
  }
  constructor(private movieservice: MovieService) {}

  getMovies() {
    this.movieservice.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
}
