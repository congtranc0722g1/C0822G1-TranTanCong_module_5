import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  categoryList: Category[] = [];
  form: FormGroup =  new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    company: new FormControl(),
    category: new FormControl()
  });

  public CompareWith(object1: Product, object2: Product){
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private router: Router, private  activatedRoute: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const  id = +next.get("id");
      this.getProduct(id);
    })

    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    })
  }

  ngOnInit(): void {
  }

  getProduct(id: number){
    this.productService.findById(id).subscribe(next => {
      this.form.patchValue(next);
    })
  }

  createProduct() {
    if (this.form.valid){
      const product = this.form.value;
      this.productService.editProduct(product.id, product).subscribe(next => {
        this.router.navigateByUrl("");
        alert("Chỉnh sửa thành công")
      })
    }
  }
}
