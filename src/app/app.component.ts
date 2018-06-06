import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TitelService} from './titel.service'

export interface Post{
  name:string
  tiket: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [TitelService]
})
export class AppComponent {
  title:string;
  posts: Post[] =  []

constructor(private titleService:TitelService, private http:HttpClient){}


ngOnInit(){
  setInterval(()=>{
  this.title = this.titleService.title
  }, 2000)
  this.http.get<Post[]>('file.json')
    .subscribe(Response=>{
      this.posts = Response
    })
}
}

