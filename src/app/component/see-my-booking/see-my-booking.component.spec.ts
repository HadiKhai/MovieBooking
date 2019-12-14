import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMyBookingComponent } from './see-my-booking.component';

describe('SeeMyBookingComponent', () => {
  let component: SeeMyBookingComponent;
  let fixture: ComponentFixture<SeeMyBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeMyBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeMyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
