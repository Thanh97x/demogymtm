import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutListDkComponent } from './about-list-dk.component';

describe('AboutListDkComponent', () => {
  let component: AboutListDkComponent;
  let fixture: ComponentFixture<AboutListDkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutListDkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutListDkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
