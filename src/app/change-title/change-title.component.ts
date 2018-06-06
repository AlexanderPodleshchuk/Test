import { Component, OnInit } from '@angular/core';
import { TitelService } from '../titel.service';

@Component({
  selector: 'change-title',
  templateUrl: './change-title.component.html',
  styles: []
})
export class ChangeTitleComponent implements OnInit {
  title:string;
  constructor(private titleService:TitelService) { }
  

  ngOnInit() {
    setInterval(()=>{
      this.title = this.titleService.title
      }, 2000)
  }

  changeTitle(e){
    const newTitle = e.target.event
    this.titleService.title = newTitle
  }
}
