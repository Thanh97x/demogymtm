import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html'
})
export class LandingpageComponent extends AppComponentBase implements OnInit {
  ngOnInit(): void {
    return null;
  }
  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

}
