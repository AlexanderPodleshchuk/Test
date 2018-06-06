import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule} from '@angular/common/http';

@Injectable()
export class TitelService {
  title:string = "Server";
  constructor() { 
    setTimeout(()=> {
      this.title ="New Service"
    }, 3000)
  }

}
