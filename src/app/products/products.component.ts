import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Import this
import { RouterModule } from '@angular/router'; // <--- Import this
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  standalone: true, // <--- Ensure this is true
  imports: [CommonModule, RouterModule], // <--- THIS FIXES THE RED LINES
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      // The API returns an object { products: [...] }, so we grab the array
      this.products = data.products;
    });
  }
}