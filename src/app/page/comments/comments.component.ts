import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getComment().subscribe(comments =>{
      this.comments = comments;
    });
  }

}
