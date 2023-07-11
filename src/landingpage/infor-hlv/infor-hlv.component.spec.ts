import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforHlvComponent } from './infor-hlv.component';

describe('InforHlvComponent', () => {
  let component: InforHlvComponent;
  let fixture: ComponentFixture<InforHlvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforHlvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforHlvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
