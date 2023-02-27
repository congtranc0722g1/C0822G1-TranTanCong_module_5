import {Category} from './category';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  company?: string;
  category?: Category;
}
