import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieEventComponent } from './admin-movie-event.component';

describe('AdminMovieEventComponent', () => {
  let component: AdminMovieEventComponent;
  let fixture: ComponentFixture<AdminMovieEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
