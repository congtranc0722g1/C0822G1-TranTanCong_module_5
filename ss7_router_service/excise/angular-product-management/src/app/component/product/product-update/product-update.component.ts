import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe( next => {
      this.id = +next.get('id');
      const product = this.getProduct(this.id);
      this.form = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  getProduct(id: number) {
    return this.productService.findById(this.id);
  }

  ngOnInit(): void {
  }

  submit(id: number) {
    if (this.form.valid) {
      this.productService.updateProduct(id, this.form.value);
      alert('Cập nhật thành công');
    }
  }
}
