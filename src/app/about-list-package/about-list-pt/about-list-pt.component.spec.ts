import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutListPtComponent } from './about-list-pt.component';

describe('AboutListPtComponent', () => {
  let component: AboutListPtComponent;
  let fixture: ComponentFixture<AboutListPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutListPtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutListPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
