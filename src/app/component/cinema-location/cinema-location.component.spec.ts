import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaLocationComponent } from './cinema-location.component';

describe('CinemaLocationComponent', () => {
  let component: CinemaLocationComponent;
  let fixture: ComponentFixture<CinemaLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
