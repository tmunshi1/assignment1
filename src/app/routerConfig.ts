import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes : Routes = [
    {
        path: 'home',
        component : HomeComponent
    },
    {
        path : 'about',
        component:AboutComponent
    },
    {
    path:'projects',
    component:ProjectsComponent
    },
    {
    path:'services',
    component:ServicesComponent
    },
    {
    path:'contact',
    component:ContactComponent
    }

]
export default appRoutes;