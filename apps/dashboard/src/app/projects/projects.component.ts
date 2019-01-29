import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = "red";
  projects: Project[];
  selectedProject: Project;

  constructor(private projectsServices: ProjectsService) { 

  }

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects  = this.projectsServices.all();
  }

  cancel() {
    this.selectProject(null);
  }

}
