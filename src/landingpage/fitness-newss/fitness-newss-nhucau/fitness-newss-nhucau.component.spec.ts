import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssNhucauComponent } from './fitness-newss-nhucau.component';

describe('FitnessNewssNhucauComponent', () => {
  let component: FitnessNewssNhucauComponent;
  let fixture: ComponentFixture<FitnessNewssNhucauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssNhucauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssNhucauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
