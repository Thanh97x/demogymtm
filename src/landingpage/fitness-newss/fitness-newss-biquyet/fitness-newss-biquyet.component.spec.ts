import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssBiquyetComponent } from './fitness-newss-biquyet.component';

describe('FitnessNewssBiquyetComponent', () => {
  let component: FitnessNewssBiquyetComponent;
  let fixture: ComponentFixture<FitnessNewssBiquyetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssBiquyetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssBiquyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
