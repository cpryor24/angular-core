import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/project';

@NgModule({
  imports: [CommonModule],
  providers: [
    ProjectsService
  ]
})
export class CoreDataModule {}
