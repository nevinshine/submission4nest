import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from './footer/footer';
import { BeautyShowcaseComponent } from "./beauty-showcase/beauty-showcase.component";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, BeautyShowcaseComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecom');
}
