import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {}

  navigateIntroduce() {
    const PropertyListElement = document.getElementById("gioithieu");
    PropertyListElement.scrollIntoView({ behavior: "smooth" });
  }

  navigateHome() {
    const PropertycardElement = document.getElementById("home");
    PropertycardElement.scrollIntoView({ behavior: "smooth" });
  }

  images = [
    {
      imageSrc: "../../assets/img-landingpage/fitness/5 ảnh đầu trang/5.jpg",
      imageAlt: "nature2",
    },
    {
      imageSrc: "../../assets/img-landingpage/fitness/5 ảnh đầu trang/7.jpg",
      imageAlt: "nature3",
    },
    {
      imageSrc: "../../assets/img-landingpage/fitness/5 ảnh đầu trang/6.jpg",
      imageAlt: "nature1",
    },
    {
      imageSrc: "../../assets/img-landingpage/fitness/5 ảnh đầu trang/4.jpg",
      imageAlt: "person1",
    },
    {
      imageSrc: "../../assets/img-landingpage/fitness/5 ảnh đầu trang/8.jpg",
      imageAlt: "person2",
    },
  ];
}
