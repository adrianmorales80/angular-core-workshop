import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  /* Used for property binding */
  primaryColor = "red";
  /* Used for structural directive example and <pre> projects | json </pre> */
  projects = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];
  /* Store project clicked details */
  selectedProject;

  constructor() { }

  ngOnInit() {
  }
  /* Pass in $event, reference variable, or item click were listening for here */
  selectProject(project) {
    this.selectedProject = project;
    console.log(project);
  }
  /* Null is passed into selectProject function when the cancel button is clicked */
  cancel() {
    this.selectProject(null);
  }

}
