import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf and *ngFor
import { RouterModule, ActivatedRoute } from '@angular/router'; // Required for routerLink and catching ID
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // <--- This line fixes the red errors
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = null; // Start as null to trigger the "Loading" screen

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // 1. Get the ID from the URL (e.g., /products/5)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Looking for Product ID:", id);

    // 2. Fetch the data
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        console.log("Product Data Loaded:", data);
        this.product = data; // Data arrived! The HTML will now update.
      },
      error: (err) => {
        console.error("Error fetching product:", err);
      }
    });
  }
}