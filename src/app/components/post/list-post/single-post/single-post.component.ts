import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { CommentPayload } from 'src/app/shared/comment/comment.payload';
import { CommentService } from 'src/app/shared/comment/comment.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  @Input() postData: any;
  panelOpenState = false;
  comments: CommentPayload[] = [];

  commentForm = new FormGroup({
    text: new FormControl('', Validators.required)
  });

  commentPayload: CommentPayload = {
    text: '',
    postId: 0
  };

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentPayload.postId = this.postData.id;
    this.getCommentsForPost();
    console.log(this.comments);
  }

  togglePanel(): void {
    this.panelOpenState = !this.panelOpenState
  }


  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postData.id).subscribe(data => {
      data.map(time => {
        var aDay = 24*60*60*1000;
        time.createdDate = this.convertCommentDate(new Date(Number(time.createdDate) - aDay));
      });
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    })
  }

  convertCommentDate(date: any) {
    const currentDate: any = new Date();
    var seconds = Math.floor((currentDate - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

}
