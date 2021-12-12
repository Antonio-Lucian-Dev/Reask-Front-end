import { PostCategoryComponent } from './post-category/post-category.component';
import { SinglePostComponent } from './../components/post/list-post/single-post/single-post.component';
import { ListPostComponent } from './../components/post/list-post/list-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from '../components/post/vote/vote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListCategoryComponent } from './list-category/list-category.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    ListPostComponent,
    SinglePostComponent,
    VoteComponent,
    ListCategoryComponent,
    PostCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  exports: [
    ListPostComponent,
    SinglePostComponent,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    VoteComponent,
    MatDialogModule,
    ListCategoryComponent
  ],
})
export class SharedModule { }
