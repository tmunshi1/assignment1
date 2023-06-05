import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent { projects: string[] = [
  'Project 1: E-Commerce Website',
'Developed a responsive e-commerce website using HTML, CSS, and JavaScript. Integrated with a backend system to handle product catalog, user authentication, and payment processing.',
'Implemented features such as product search, cart management, and order tracking, resulting in improved user experience and increased sales.',

'Project 2: Portfolio Website',
'Created a dynamic portfolio website using React.js and styled it with CSS and Bootstrap.',
'Implemented a smooth scrolling navigation, showcased previous projects, and incorporated a contact form for inquiries.',
 'Optimized the website for mobile responsiveness and ensured cross-browser compatibility.',

'Project 3: Content Management System (CMS)',
'Built a custom CMS using PHP and MySQL to manage and publish articles.', 
'Developed an intuitive user interface for content creation, editing, and publishing.',
'Implemented user authentication and access control, allowing different user roles with specific permissions. Integrated SEO features and implemented an image gallery for multimedia content.'

];

}
