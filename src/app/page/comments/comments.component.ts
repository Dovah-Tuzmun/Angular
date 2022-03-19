import { Component, OnInit } from '@angular/core';
import {CommentService } from 'src/app/service/comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  constructor(private commentService: CommentService) {

  }

  ngOnInit(): void {
    this.comments = this.commentService.getComment();
  }
  escuchaHijo(id:number){
    console.log('Click en:', id);
  }

}
