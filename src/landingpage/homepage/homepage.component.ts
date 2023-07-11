import { Component, OnInit, ElementRef } from '@angular/core'

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
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
}