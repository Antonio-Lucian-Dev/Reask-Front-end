import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryModel } from '../interface/category.model';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss']
})
export class PostCategoryComponent implements OnInit {

  categoryForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  categoryModel: CategoryModel;
  errorMessage = "";

  constructor(private router: Router, private fb: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  createCategory() {
    console.log(this.categoryForm.valid);
    if (this.categoryForm.valid) {
      this.categoryModel.name = this.categoryForm.get('title')
        .value;
      this.categoryModel.description = this.categoryForm.get('description')
        .value;
      this.categoryService.createCategory(this.categoryModel).subscribe(data => {
        this.router.navigateByUrl('/list-subreddits');
      }, error => {
        throwError(error);
        this.errorMessage = error.error.message;
      })
    }
  }
}
