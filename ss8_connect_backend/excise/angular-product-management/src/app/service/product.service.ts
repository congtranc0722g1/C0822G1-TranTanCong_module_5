import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  addProduct(event: any) {
    return this.httpClient.post('http://localhost:3000/products', event);
  }
  deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:3000/products/' + id);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }

  updateProduct(id: number, product: Product) {
    return this.httpClient.put('http://localhost:3000/products/' + id,product)
  }
}
