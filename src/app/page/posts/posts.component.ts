import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  
  constructor(private dataService: DataService) {

   }

  ngOnInit(): void {
    this.posts = this.dataService.getPost();
  //   this.dataService.getPost().subscribe(posts =>{
  //     this.posts = posts;
  //   });
  }

  escuchaHijo(id:number){
    console.log('Click en:', id);
  }

}
