import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  form: FormGroup;
  id: number;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = +next.get('id');
      const product = productService.findById(this.id);
      this.form = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  ngOnInit(): void {
    this.product = this.productService.findById(this.id);
  }

  submit(id: any) {
    if (this.form.valid) {
      this.productService.deleteProduct(id);
      alert('Xóa thành công');
    }
  }
}
