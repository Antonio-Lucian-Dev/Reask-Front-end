import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  @Input() posts: Array<PostModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
