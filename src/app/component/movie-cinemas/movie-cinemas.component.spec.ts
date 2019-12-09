import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCinemasComponent } from './movie-cinemas.component';

describe('MovieCinemasComponent', () => {
  let component: MovieCinemasComponent;
  let fixture: ComponentFixture<MovieCinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
