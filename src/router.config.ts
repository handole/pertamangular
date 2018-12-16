import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './app/home/home.component';
import { ResumeComponent } from './app/resume/resume.component';
import { HeaderComponent } from './app/header/header.component';
import { AboutComponent } from './app/about/about.component';
import { CategoriesMenuComponent } from './app/categories-menu/categories-menu.component';
import { DapilComponent } from "./app/dapil/dapil.component";
import { ProductListComponent } from './app/product-list/product-list.component';
// import { ProductDetailCOmponent } from './app/product-detail/product-detail.component';
import { ModuleWithProviders, NgModule } from "@angular/core";

export const routes: Routes = [
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
    },
    {
        path: 'dapil',
        component: DapilComponent
    },
    {
        path: 'products',
        component: ProductListComponent

    }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routerConfig)],
//     exports: [RouterModule],
// })

// export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
