import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/get-products.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../../models/product.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIconModule, ProductDetailComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})

export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'image', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  selectedProduct: Product | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts()
      .then(products => {
        this.dataSource.data = products;
        this.paginator.length = products.length;
      })
      .catch(error => console.error(error));
  }

  showDetails(product: Product | null): void {
    this.selectedProduct = product;
  }
}