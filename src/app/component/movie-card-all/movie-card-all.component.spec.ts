import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardAllComponent } from './movie-card-all.component';

describe('MovieCardAllComponent', () => {
  let component: MovieCardAllComponent;
  let fixture: ComponentFixture<MovieCardAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
