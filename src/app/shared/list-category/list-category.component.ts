import { PostCategoryComponent } from './../post-category/post-category.component';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../interface/category.model';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categories: Array<CategoryModel>;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    }, error => {
      throwError(error);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostCategoryComponent, {
      width: '450px',
      height: '570px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
