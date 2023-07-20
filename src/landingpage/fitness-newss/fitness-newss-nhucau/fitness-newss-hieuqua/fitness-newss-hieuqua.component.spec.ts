import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssHieuquaComponent } from './fitness-newss-hieuqua.component';

describe('FitnessNewssHieuquaComponent', () => {
  let component: FitnessNewssHieuquaComponent;
  let fixture: ComponentFixture<FitnessNewssHieuquaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssHieuquaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssHieuquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
