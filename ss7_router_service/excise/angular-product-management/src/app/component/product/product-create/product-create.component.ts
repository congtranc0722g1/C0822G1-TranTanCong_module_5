import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private productService: ProductService) {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
  }

  submit() {
    if (this.form.valid) {
      this.productService.saveProduct(this.form.value);
      this.form.reset();
    }
  }

  ngOnInit(): void {
  }

}
