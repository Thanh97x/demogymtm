import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGiahanComponent } from './about-giahan.component';

describe('AboutGiahanComponent', () => {
  let component: AboutGiahanComponent;
  let fixture: ComponentFixture<AboutGiahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGiahanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGiahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
