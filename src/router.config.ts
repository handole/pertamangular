import { Routes } from "@angular/router";
import { HomeComponent } from './app/home/home.component';
import { ResumeComponent } from './app/resume/resume.component';
import { HeaderComponent } from './app/header/header.component';
import { AboutComponent } from './app/about/about.component';
import { CategoriesMenuComponent } from './app/categories-menu/categories-menu.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];