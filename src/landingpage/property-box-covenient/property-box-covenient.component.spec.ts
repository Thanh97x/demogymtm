import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBoxCovenientComponent } from './property-box-covenient.component';

describe('PropertyBoxCovenientComponent', () => {
  let component: PropertyBoxCovenientComponent;
  let fixture: ComponentFixture<PropertyBoxCovenientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBoxCovenientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBoxCovenientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
