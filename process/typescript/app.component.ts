import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  styleUrls: ['css/app-items.css']
})
export class AppComponent {
  name: string;
  artists: any;
  
  onClick(myName) {
    this.name=myName.name;
  }

  addArtist(myArtist) {
    this.artists.push({
      name: myArtist,
      school: 'unlisted'
    })
  }

  constructor() {
    this.name = '';
    this.artists = [
      {
        name: 'Mary',
        school: 'University of Ill'
      },
      {
        name: 'Barry',
        school: 'University of FL'
      },
      {
        name: 'Jo',
        school: 'University of WA'
      },
      {
        name: 'Sarah',
        school: 'University of WA'
      }
    ]

  }
}

