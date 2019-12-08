import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieEventTimesComponent } from './admin-movie-event-times.component';

describe('AdminMovieEventTimesComponent', () => {
  let component: AdminMovieEventTimesComponent;
  let fixture: ComponentFixture<AdminMovieEventTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieEventTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieEventTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
