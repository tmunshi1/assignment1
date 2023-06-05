import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {aboutMe: string[] = [
  'Hi, I am a Software Engineer with 2 years of experience in software industry.',
  'Worked as Head of Product Management in Google for various technologies (Google Search Engine, Google Drive, Chrome Browser).',
  'Delivered all product withing deadlines. Always eager to learn new technologies.',
  'Currently, working as CEO of Google Alphabet',
];

}
