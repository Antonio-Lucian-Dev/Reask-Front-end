import { CreatePostComponent } from './../post/create-post/create-post.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isUserLogged = false;
  posts: Array<PostModel> = [];
  isListPost: boolean = true;

  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      width: '500px',
      height: '750px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
