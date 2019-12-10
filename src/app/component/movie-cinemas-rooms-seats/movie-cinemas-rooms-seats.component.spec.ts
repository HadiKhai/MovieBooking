import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCinemasRoomsSeatsComponent } from './movie-cinemas-rooms-seats.component';

describe('MovieCinemasRoomsSeatsComponent', () => {
  let component: MovieCinemasRoomsSeatsComponent;
  let fixture: ComponentFixture<MovieCinemasRoomsSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCinemasRoomsSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCinemasRoomsSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
