import { Component, OnInit, ElementRef } from '@angular/core';
import { texts } from '../../idatajson';
import { data } from '../../datajson';


@Component({
  selector: 'app-lazy-list',
  templateUrl: './lazy-list.component.html',
  styleUrls: ['./lazy-list.component.css'],
  providers : []
})
export class LazyListComponent implements OnInit {

   resault : texts[]  = data;
  posts: any;
  toShow: texts[] = [];

  constructor(){}

  ngOnInit() {
    this.toShow.push(this.resault[0]);
    this.toShow.push(this.resault[1]);
  }

  onScroll() {
    let size = this.toShow.length;
    for (let i=this.toShow.length; i < Math.min(size + 2, this.resault.length); i++) {
      this.toShow.push(this.resault[i]);
      } 
  }
}
