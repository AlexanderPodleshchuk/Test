import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent }   from './app.component';
import { Component } from '@angular/core';
import { ChangeTitleComponent } from './change-title/change-title.component';
import { TitelService } from './titel.service';
 
@NgModule({
  declarations: [
    AppComponent,
    ChangeTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TitelService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  
}

