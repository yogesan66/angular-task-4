import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  user_name:any;
  age:number;

  onclick(){
    this.user_name = "edupala.com";
    this.age = 4;
  }
}
