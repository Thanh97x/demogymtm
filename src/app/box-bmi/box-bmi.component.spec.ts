import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBmiComponent } from './box-bmi.component';

describe('BoxBmiComponent', () => {
  let component: BoxBmiComponent;
  let fixture: ComponentFixture<BoxBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxBmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
