import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment:any;
  @Output() cComment = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    this.cComment.emit(this.comment.id);
  }

}
