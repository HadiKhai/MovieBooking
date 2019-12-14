import {
  Component,
  OnInit,
  ViewChild,
  Input,
  SimpleChanges
} from "@angular/core";
import { IgxExpansionPanelComponent, IgxIconService } from "igniteui-angular";

import { MovieService } from "src/app/services/Movie/movie.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-movie-card-all",
  styleUrls: ["./movie-card-all.component.scss"],
  templateUrl: "./movie-card-all.component.html"
})
export class MovieCardAllComponent implements OnInit {
  public movies;
  @Input() id: number;
  @Input() limit: number;
  @Input() columns: number;
  @Input() exclude?: number | number[];

  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel: IgxExpansionPanelComponent;

  public toggleDetails() {
    this.panel.toggle();
  }

  public ngOnInit() {
    this.route.data.subscribe(
      (data: { movies: any }) => (this.movies = data.movies)
    );
  }
  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}

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
