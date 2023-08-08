import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  
})
export class PropertyCardComponent {
  // implements OnInit 
  // images: string[] = ['slider/wp3018787.jpg',
  //  'slider/Background-dep-gym.jpg', 
  //  'slider/Fitness-Desktop-Wallpaper.jpg',
  //  ];

  //  currentImageIndex = 0;
  // sliderHeader: HTMLElement | null = null;

  // constructor() {}

  // ngOnInit() {
  //   this.sliderHeader = document.querySelector('.slider-header');
  //   this.loadImage(this.images[this.currentImageIndex]); // Load ảnh nền ban đầu
  //   setInterval(() => {
  //     this.changeBackgroundImage();
  //   }, 2000);
  // }

  // loadImage(imageSrc: string) {
  //   const image = new Image();
  //   image.src = imageSrc;
  //   image.onload = () => {
  //     if (this.sliderHeader) {
  //       this.sliderHeader.style.backgroundImage = `url('${imageSrc}')`;
  //     }
  //   };
  // }

  // changeBackgroundImage() {
  //   this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  //   this.loadImage(this.images[this.currentImageIndex]);
  // }
}
