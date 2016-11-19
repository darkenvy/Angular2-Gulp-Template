import {Component} from 'angular2/core';

@Component({
  selector: 'main',
  templateUrl: 'partials/app.html',
  styleUrls: ['css/app.css']
})
export class AppComponent {
  name: string;
  
  onClick(myName) {
    this.name=myName;
  }

  constructor() {
    this.name = '';
  }
}

