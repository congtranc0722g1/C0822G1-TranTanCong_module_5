import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Product[]>("http://localhost:3000/product");
  }

  deleteProduct(id: number) {
    return this.httpClient.delete("http://localhost:3000/product/" + id)
  }

  createProduct(product: Product) {
    return this.httpClient.post("http://localhost:3000/product", product);
  }

  findById(id: number) {
    return this.httpClient.get<Product>("http://localhost:3000/product/" + id);
  }

  editProduct(id: number, product: Product) {
    return this.httpClient.put("http://localhost:3000/product/" + id, product);
  }

  searchAll(name: string, category: string) {
    return this.httpClient.get<Product[]>("http://localhost:3000/product?name_like=" + name + "&category.name=" + category);
  }

  searchCategory(category: string) {
    return this.httpClient.get<Product[]>("http://localhost:3000/product?category.name=" + category);
  }

  searchName(name: string) {
    return this.httpClient.get<Product[]>("http://localhost:3000/product?name_like=" + name);
  }
}
