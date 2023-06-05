import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {myServices: string[][] = [
  ['Web Development', 'Front-end Development'],
  ['Back-end Development', 'Responsive Design'],
  ['Website Maintenance and Updates', 'E-commerce Solutions']
];
}
