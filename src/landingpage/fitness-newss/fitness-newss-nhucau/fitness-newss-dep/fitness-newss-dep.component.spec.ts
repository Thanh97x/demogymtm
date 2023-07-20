import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssDepComponent } from './fitness-newss-dep.component';

describe('FitnessNewssDepComponent', () => {
  let component: FitnessNewssDepComponent;
  let fixture: ComponentFixture<FitnessNewssDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
