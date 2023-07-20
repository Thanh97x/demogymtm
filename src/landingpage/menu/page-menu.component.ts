import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss']
})
export class PageMenuComponent implements OnInit {
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {

  }

  navigateIntroduce() {
    const PropertyListElement = document.getElementById("gioithieu")
    PropertyListElement.scrollIntoView({ behavior: "smooth" })
  }

  navigateHome() {
    const PropertycardElement = document.getElementById("home")
    PropertycardElement.scrollIntoView({ behavior: "smooth" })
  }

  navigateToLogin() {
    const loginElement = document.getElementById("login")
    loginElement.scrollIntoView({ behavior: "smooth" })
  }

}
