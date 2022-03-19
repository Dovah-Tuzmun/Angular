import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any;
  @Output() cPost = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    this.cPost.emit(this.post.id);
  }

}
