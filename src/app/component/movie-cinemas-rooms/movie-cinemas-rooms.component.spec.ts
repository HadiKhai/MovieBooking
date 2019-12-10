import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCinemasRoomsComponent } from './movie-cinemas-rooms.component';

describe('MovieCinemasRoomsComponent', () => {
  let component: MovieCinemasRoomsComponent;
  let fixture: ComponentFixture<MovieCinemasRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCinemasRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCinemasRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
