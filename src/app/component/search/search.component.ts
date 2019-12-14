import { Component, OnInit } from "@angular/core";
import { SearchService } from "src/app/services/Search/search.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  movies;
  mySubscription: any;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.mySubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngOnInit() {}

  search(data) {
    console.log(data);
    this.searchService.getMovie(data).subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => {
        console.error(err);
        this.movies = null;
      },
      () => console.log("Movie Loaded")
    );
  }
  onClick(movieId) {
    this.router.navigateByUrl("/movies/" + movieId);
  }
}
