import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { MovieComponent } from "./component/movie/movie.component";
import { MoviesComponent } from "./component/movies/movies.component";
import { AdminComponent } from "./component/admin/admin.component";
import { SliderComponent } from "./component/slider/slider.component";
import { MovieService } from "./services/Movie/movie.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  IgxAvatarModule,
  IgxButtonModule,
  IgxCardModule,
  IgxIconModule,
  IgxDividerModule,
  IgxRippleModule,
  IgxChipsModule,
  IgxSliderModule,
  IgxListModule,
  IgxExpansionPanelModule
} from "igniteui-angular";
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MovieCardComponent } from "./component/movie-card/movie-card.component";
import { AdminMovieComponent } from "./component/admin-movie/admin-movie.component";
import { AdminCinemaComponent } from "./component/admin-cinema/admin-cinema.component";
import { AdminMovieEventComponent } from "./component/admin-movie-event/admin-movie-event.component";
import { CinemaService } from "./services/Cinema/cinema.service";
import { StaffComponent } from "./component/staff/staff.component";
import { RoomComponent } from "./component/room/room.component";
import { StaffService } from "./services/Staff/staff.service";
import { RoomService } from "./services/Room/room.service";
import { AdminMovieEditComponent } from "./component/admin-movie-edit/admin-movie-edit.component";
import { MovieResolverService } from "./services/Movie-resolver/movie-resolver.service";
import { RatingViewComponent } from "./component/rating-view/rating-view.component";
import { AdminMovieEventCinemasComponent } from "./component/admin-movie-event-cinemas/admin-movie-event-cinemas.component";
import { AdminMovieEventCinemasRoomsComponent } from "./component/admin-movie-event-cinemas-rooms/admin-movie-event-cinemas-rooms.component";
import { AdminMovieEventCinemasRoomsMoviesComponent } from "./component/admin-movie-event-cinemas-rooms-movies/admin-movie-event-cinemas-rooms-movies.component";
import { AdminMovieEventTimesComponent } from "./component/admin-movie-event-times/admin-movie-event-times.component";
import { MovieCinemasComponent } from "./component/movie-cinemas/movie-cinemas.component";
import { MovieCinemasRoomsComponent } from "./component/movie-cinemas-rooms/movie-cinemas-rooms.component";
import { MovieCinemasRoomsSeatsComponent } from "./component/movie-cinemas-rooms-seats/movie-cinemas-rooms-seats.component";
import { CinemaResolverService } from "./services/Cinema-resolver/cinema-resolver.service";
import { SeatsResolverService } from "./services/Seats-Resolver/seats-resolver.service";
import { SeatService } from "./services/Seats/seat.service";
import { RoomResolverService } from "./services/Room-resolver/room-resolver.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MoviesComponent,
    AdminComponent,
    SliderComponent,
    MovieCardComponent,
    AdminMovieComponent,
    AdminCinemaComponent,
    AdminMovieEventComponent,
    StaffComponent,
    RoomComponent,
    AdminMovieEditComponent,
    RatingViewComponent,
    AdminMovieEventCinemasComponent,
    AdminMovieEventCinemasRoomsComponent,
    AdminMovieEventCinemasRoomsMoviesComponent,
    AdminMovieEventTimesComponent,
    MovieCinemasComponent,
    MovieCinemasRoomsComponent,
    MovieCinemasRoomsSeatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxDividerModule,
    IgxRippleModule,
    IgxChipsModule,
    IgxListModule,
    IgxExpansionPanelModule,
    IgxSliderModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    CinemaService,
    StaffService,
    RoomService,
    MovieResolverService,
    CinemaResolverService,
    SeatService,
    SeatsResolverService,
    RoomResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
