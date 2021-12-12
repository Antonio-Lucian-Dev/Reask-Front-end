import { Component, Input, OnInit } from '@angular/core';
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
  comments: CommentPayload[] = [
    {text: "fd", postId: 1, username: 'gfg', duration: '455'},
    {text: "fd", postId: 1, username: 'gfg', duration: '455'}
  ];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    console.log(this.postData)
  }

  togglePanel(): void {
    this.panelOpenState = !this.panelOpenState
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postData.id).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }

}
