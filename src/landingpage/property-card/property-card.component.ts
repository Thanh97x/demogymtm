import { title } from 'process';
import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface imageProperty {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  
})
export class PropertyCardComponent implements OnInit {

@Input() images: imageProperty [] = [] 

selectedIndex = 0; 

ngOnInit(): void {
  
}


}
