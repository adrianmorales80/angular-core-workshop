import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* String interpolation used with the variable to render in html */
  title = 'Angular Core Workshop';
  /**
   * Adding Navigation Links
   * The links variable below will be used in the html app.component.html template
   * 1. loop over them with ngFor (structural directive)
   * 2. render the text with string interpolation
   * 3. property bind to routerLink
   * 4. Assign active when clicked
   * 5. lazy loading is brought into the html template thanks to the router-outlet tag
   * Additional notes: Look into using children at the child level to bring in a subcomponent under home, for example
  **/
  links = [
    {path: '/', icon: 'home', title: 'Home'},
    {path: '/customers', icon: 'face',  title: 'Customers'},
    {path: '/projects', icon: 'work', title: 'Projects'}
  ]

}
