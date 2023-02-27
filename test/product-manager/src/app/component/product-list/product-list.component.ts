import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  delete: Product = {};

  categoryList: Category[] = [];
  page: string | number;

  constructor(private categoryService: CategoryService, private productService: ProductService) {
    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    })
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.productList = next;
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.delete.id).subscribe(next => {
      this.getAll();
      alert("Xóa Thành Công")
    })
  }

  search(name: string, category: string) {
    if (name ==="" && category === ""){
      this.getAll();
    }else if(name !== "" && category !== ""){
      this.productService.searchAll(name, category).subscribe(next =>{
        this.productList = next;
      })
    }else if(name === "" && category !== ""){
    this.productService.searchCategory(category).subscribe(next => {
      this.productList = next;
    })
    }else {
      this.productService.searchName(name).subscribe(next => {
        this.productList = next;
      })
    }
  }

}
