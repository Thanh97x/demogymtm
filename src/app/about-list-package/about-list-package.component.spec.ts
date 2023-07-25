import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutListPackageComponent } from './about-list-package.component';

describe('AboutListPackageComponent', () => {
  let component: AboutListPackageComponent;
  let fixture: ComponentFixture<AboutListPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutListPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutListPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
