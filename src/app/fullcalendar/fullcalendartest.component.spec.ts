import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendartestComponent } from './fullcalendartest.component';

describe('FullcalendartestComponent', () => {
  let component: FullcalendartestComponent;
  let fixture: ComponentFixture<FullcalendartestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalendartestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullcalendartestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
