import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../interface/category.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categories: Array<CategoryModel>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    }, error => {
      throwError(error);
    })
  }

}
