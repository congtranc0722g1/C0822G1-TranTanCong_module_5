import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  temp: Product = {};

  constructor(private productService: ProductService) {
   this.getAll()
  }

  getAll(){
    this.productService.getAll().subscribe(next => {
      console.log(next);
      this.products = next;
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
  }


  deleteProduct() {
    if (this.temp.id != null){
      this.productService.deleteProduct(this.temp.id).subscribe(next =>{
        this.getAll()
        alert('Xóa thành công')
      })
    }
  }
}
