import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categoryList: Category[] = [];
  form: FormGroup =  new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    company: new FormControl(),
    category: new FormControl()
  });

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) {
    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    })
  }

  ngOnInit(): void {
  }

  createProduct() {
    if (this.form.valid){
      this.productService.createProduct(this.form.value).subscribe(next => {
        this.router.navigateByUrl("");
        alert("Thêm mới thành công");
      })
    }
  }
}
