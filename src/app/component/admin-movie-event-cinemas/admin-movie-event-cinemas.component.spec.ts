import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieEventCinemasComponent } from './admin-movie-event-cinemas.component';

describe('AdminMovieEventCinemasComponent', () => {
  let component: AdminMovieEventCinemasComponent;
  let fixture: ComponentFixture<AdminMovieEventCinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieEventCinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieEventCinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
