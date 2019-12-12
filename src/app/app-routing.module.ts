import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { MovieComponent } from "./component/movie/movie.component";
import { MoviesComponent } from "./component/movies/movies.component";
import { AdminComponent } from "./component/admin/admin.component";
import { AdminMovieEventComponent } from "./component/admin-movie-event/admin-movie-event.component";
import { AdminCinemaComponent } from "./component/admin-cinema/admin-cinema.component";
import { AdminMovieComponent } from "./component/admin-movie/admin-movie.component";
import { StaffComponent } from "./component/staff/staff.component";
import { RoomComponent } from "./component/room/room.component";
import { AdminMovieEditComponent } from "./component/admin-movie-edit/admin-movie-edit.component";
import { MovieResolverService } from "./services/Movie-resolver/movie-resolver.service";
import { RatingViewComponent } from "./component/rating-view/rating-view.component";
import { AdminMovieEventCinemasComponent } from "./component/admin-movie-event-cinemas/admin-movie-event-cinemas.component";
import { AdminMovieEventCinemasRoomsComponent } from "./component/admin-movie-event-cinemas-rooms/admin-movie-event-cinemas-rooms.component";
import { AdminMovieEventCinemasRoomsMoviesComponent } from "./component/admin-movie-event-cinemas-rooms-movies/admin-movie-event-cinemas-rooms-movies.component";
import { AdminMovieEventTimesComponent } from "./component/admin-movie-event-times/admin-movie-event-times.component";
import { CinemaResolverService } from "./services/Cinema-resolver/cinema-resolver.service";
import { MovieCinemasRoomsSeatsComponent } from "./component/movie-cinemas-rooms-seats/movie-cinemas-rooms-seats.component";
import { SeatsResolverService } from "./services/Seats-Resolver/seats-resolver.service";
import { RoomResolverService } from "./services/Room-resolver/room-resolver.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { state: "home" } },
  { path: "movies", component: MoviesComponent, data: { state: "movies" } },

  {
    path: "movies/:id",
    component: MovieComponent,
    resolve: { cinema: CinemaResolverService }
  },
  {
    path: "movies/:id/cinemas/:id2/rooms/:id3/seats",
    component: MovieCinemasRoomsSeatsComponent,
    resolve: { seats: SeatsResolverService }
  },
  { path: "admin", component: AdminComponent, data: { state: "admin" } },
  { path: "admin/movie", component: AdminMovieComponent },
  {
    path: "admin/movie/:id",
    component: AdminMovieEditComponent,
    resolve: { movie: MovieResolverService }
  },
  { path: "admin/movie/:id/ratings", component: RatingViewComponent },
  { path: "admin/cinema", component: AdminCinemaComponent },
  { path: "admin/cinema", component: AdminCinemaComponent },
  { path: "admin/cinemas/:id/staffs", component: StaffComponent },
  {
    path: "admin/cinemas/:id/rooms",
    component: RoomComponent,
    resolve: { rooms: RoomResolverService }
  },
  { path: "admin/showing/cinemas", component: AdminMovieEventComponent },
  {
    path: "admin/showing/cinemas/:id/rooms",
    component: AdminMovieEventCinemasComponent
  },
  {
    path: "admin/showing/cinemas/:id/rooms/:id2/movies",
    component: AdminMovieEventCinemasRoomsComponent
  },
  {
    path: "admin/showing/cinemas/:id/rooms/:id2/movies/addmovie",
    component: AdminMovieEventCinemasRoomsMoviesComponent
  },
  {
    path: "admin/showing/cinemas/:id/rooms/:id2/movies/addmovie/:id3/times",
    component: AdminMovieEventTimesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
