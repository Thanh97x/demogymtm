import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutListTtComponent } from './about-list-tt.component';

describe('AboutListTtComponent', () => {
  let component: AboutListTtComponent;
  let fixture: ComponentFixture<AboutListTtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutListTtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutListTtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
