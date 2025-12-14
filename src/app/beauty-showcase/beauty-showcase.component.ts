import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-beauty-showcase',
  templateUrl: './beauty-showcase.component.html',
  styleUrls: ['./beauty-showcase.component.css'],
  imports: [CommonModule, RouterModule],
})
export class BeautyShowcaseComponent {
  
  // Tracks which slide is showing (0, 1, or 2)
  activeIndex = 0;
  totalSlides = 3; // We have 3 hardcoded slides

  prevSlide() {
    // If at 0, go to 2 (totalSlides - 1). Otherwise go back 1.
    this.activeIndex = (this.activeIndex === 0) ? this.totalSlides - 1 : this.activeIndex - 1;
  }

  nextSlide() {
    // If at 2, go to 0. Otherwise go forward 1.
    this.activeIndex = (this.activeIndex === this.totalSlides - 1) ? 0 : this.activeIndex + 1;
  }
}