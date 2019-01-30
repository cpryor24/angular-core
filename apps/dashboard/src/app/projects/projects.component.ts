import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = "red";
  projects$;
  selectedProject: Project;

  constructor(private projectsServices: ProjectsService) { 

  }

  ngOnInit() {
    this.getProjects();
    this.resetProject()
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  getProjects() {
    this.projects$ = this.projectsServices.all()
  }

  saveProject(project) {
    if(!project.id){
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsServices.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project) {
    this.projectsServices.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsServices.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }

}
