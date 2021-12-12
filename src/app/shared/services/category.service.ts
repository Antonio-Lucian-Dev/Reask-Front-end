import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../interface/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>('http://localhost:9792/api/subreddit');
  }

  createCategory(CategoryModel: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>('http://localhost:9792/api/subreddit',
      CategoryModel);
  }
}
