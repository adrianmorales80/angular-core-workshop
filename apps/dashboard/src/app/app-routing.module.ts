/* Copied the syntax from project-routing.module.ts and made app-routing.module.ts from app level */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

const routes: Routes = [
  /* Customers, Home, and Projects within dashboard already have their own routing modules.
  ** We can use lazy loading here. Instead we will need to use loadChildren
  ** The # references our export
  ** Module is our gateway and so the hashtag after the path is saying boostrap the date in this file, this module, into our app
  ** Protip: Order can matter when loading into app.module.ts. In this case, the modules being  lazy loaded will need to be removed from app.module.ts
  ** We will also need to load the routes in our children modules
  ** Ultimately we can use this information to add navigation links in app.component.ts
  */
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  { path:'login', component: LoginComponent },
  /* "**" is a wild card when the path is not found */
  { path:'**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  /* Changed forChild to forRoot because we are now working at the app level */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/*  Updated the name from ProjectRoutingModule to AppRoutingModule */
export class AppRoutingModule { }
