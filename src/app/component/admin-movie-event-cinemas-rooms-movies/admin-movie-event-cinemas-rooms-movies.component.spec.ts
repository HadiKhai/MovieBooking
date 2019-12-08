import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieEventCinemasRoomsMoviesComponent } from './admin-movie-event-cinemas-rooms-movies.component';

describe('AdminMovieEventCinemasRoomsMoviesComponent', () => {
  let component: AdminMovieEventCinemasRoomsMoviesComponent;
  let fixture: ComponentFixture<AdminMovieEventCinemasRoomsMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieEventCinemasRoomsMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieEventCinemasRoomsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
