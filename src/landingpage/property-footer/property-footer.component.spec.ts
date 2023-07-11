import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFooterComponent } from './property-footer.component';

describe('PropertyFooterComponent', () => {
  let component: PropertyFooterComponent;
  let fixture: ComponentFixture<PropertyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
