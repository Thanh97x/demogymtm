import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforHlv2Component } from './infor-hlv2.component';

describe('InforHlv2Component', () => {
  let component: InforHlv2Component;
  let fixture: ComponentFixture<InforHlv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforHlv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforHlv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
