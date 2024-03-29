import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi } from '../base-api';
import { Category } from '../models/category.model';



@Injectable()
export class CategoriesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addCategory(category: Category): Observable<Category> {
    return this.post('categories', category);
  }

  getCategories(): Observable<Category[]> {
    return this.get('categories');
  }

  getCategoryById(id: number): Observable<Category> {
    return this.get(`categories/${id}`);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.put(`categories/${category.id}`, category);
  }

  deleteCategory(categorId: number): Observable<any> {
    return this.delete(`categories/${categorId}`);
  }
}
