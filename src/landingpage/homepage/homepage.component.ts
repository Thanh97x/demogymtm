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

    images = [
        {
          imageSrc:
            'https://c4.wallpaperflare.com/wallpaper/199/924/33/muscle-muscle-bodybuilding-press-wallpaper-preview.jpg',
          imageAlt: 'nature2',
        },
        {
          imageSrc:
            'https://i.pinimg.com/originals/cd/2e/c2/cd2ec220eeb755d71cc58291c106d344.jpg',
          imageAlt: 'nature3',
        },
        {
          imageSrc:
            'https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg',
          imageAlt: 'nature1',
        },
        {
          imageSrc:
            'https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Wallpaper-HD-Free-download.jpg',
          imageAlt: 'person1',
        },
        {
          imageSrc:
            'https://e1.pxfuel.com/desktop-wallpaper/217/624/desktop-wallpaper-gym-muscular.jpg',
          imageAlt: 'person2',
        },
      ]
}