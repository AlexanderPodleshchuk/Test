import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LazyListComponent } from './lazy-list/lazy-list.component';
import { InfiniteScrollModule} from 'ngx-infinite-scroll'
import { HttpClientModule } from '@angular/common/http';


const routes:Routes = [
  { path: '', component: LazyListComponent }
]

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [LazyListComponent],
  exports: [InfiniteScrollModule]
})
export class LazyModule { }
