import { CategoryService } from './../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from '../interface/create-post-payload';
import { CategoryModel } from 'src/app/shared/interface/category.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postForm = this.fb.group({
    title: ['', Validators.required],
    url: [''],
    category: ['', Validators.required],
    description: ['', Validators.required],
  });

  postPayload: CreatePostPayload;
  categories: Array<CategoryModel>;

  errorMessage = "";

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private categoryService: CategoryService
    ) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subredditName: ''
    }
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.categories = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    console.log(this.postForm.valid);
    if (this.postForm.valid) {
      this.postPayload.postName = this.postForm.get('title').value;
      this.postPayload.subredditName = this.postForm.get('category').value;
      this.postPayload.url = this.postForm.get('url').value;
      this.postPayload.description = this.postForm.get('description').value;

      this.postService.createPost(this.postPayload).subscribe((data) => {
        this.router.navigateByUrl('/');
      }, error => {
        throwError(error);
        console.log(error.error.message)
        this.errorMessage = error.error.message;
      })
    }
  }

}
