import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getComment(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(tap(comments =>{
      console.log(comments);
    }));
  }
}
