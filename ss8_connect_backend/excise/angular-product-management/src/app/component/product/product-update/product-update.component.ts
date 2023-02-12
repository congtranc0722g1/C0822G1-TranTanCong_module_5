import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {CategoryService} from '../../../service/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });


  categoryList: Category[] = [];

  public compareWith(object1: Category, object2: Category): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {

    this.activatedRoute.paramMap.subscribe(next => {
      const id = +next.get('id');
      if (id != null) {
      }
      this.getProduct(id);
    });
    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    });


  }

  ngOnInit(): void {
  }

  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(next => {
      this.form.patchValue(next);
    });
  }

  updateProduct() {
    const product = this.form.value;
    this.productService.updateProduct(product.id, product).subscribe(next => {
      alert('Chỉnh sửa thành công');
      this.router.navigateByUrl('');
    });
  }
}
