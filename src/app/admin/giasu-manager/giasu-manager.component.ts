import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-giasu-manager',
  templateUrl: './giasu-manager.component.html',
  styleUrls: ['./giasu-manager.component.css']
})
export class GiasuManagerComponent implements OnInit {
   products: Product[];
  selected: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.listProducts().subscribe(data =>{
      this.products = data;
    })
    // this.products = this.productService.listProducts();
  }
}