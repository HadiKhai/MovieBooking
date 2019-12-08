import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieEventCinemasRoomsComponent } from './admin-movie-event-cinemas-rooms.component';

describe('AdminMovieEventCinemasRoomsComponent', () => {
  let component: AdminMovieEventCinemasRoomsComponent;
  let fixture: ComponentFixture<AdminMovieEventCinemasRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieEventCinemasRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieEventCinemasRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
