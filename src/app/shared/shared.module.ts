import { SinglePostComponent } from './../components/post/single-post/single-post.component';
import { ListPostComponent } from './../components/post/list-post/list-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ListPostComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [ListPostComponent, SinglePostComponent],
})
export class SharedModule { }
