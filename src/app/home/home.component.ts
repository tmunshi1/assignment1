import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {myData: string[][] = [
  ['Name', 'Tasneem Munshi'],
  ['DOB', '17/05/2003'],
  ['Work Exp', '2 Years'],
  ['Education', 'Software Engineering'],
  ['Interests', 'Gaming'],
];


}
