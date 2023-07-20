import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssComponent } from './fitness-newss.component';

describe('FitnessNewssComponent', () => {
  let component: FitnessNewssComponent;
  let fixture: ComponentFixture<FitnessNewssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
