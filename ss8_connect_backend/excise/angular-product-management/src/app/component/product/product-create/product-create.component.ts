import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required])
    }),
      this.categoryService.getAll().subscribe(next => {
        console.log(next);
        this.categoryList = next;
      });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.productService.addProduct(this.form.value).subscribe(next =>{
        alert('Thêm mới thành công');
        this.router.navigateByUrl('');
      });
    }
  }
}
