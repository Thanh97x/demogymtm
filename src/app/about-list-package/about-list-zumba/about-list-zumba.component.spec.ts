import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutListZumbaComponent } from './about-list-zumba.component';

describe('AboutListZumbaComponent', () => {
  let component: AboutListZumbaComponent;
  let fixture: ComponentFixture<AboutListZumbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutListZumbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutListZumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
