import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { FoldersComponent } from '../folders/folders.component';
import { ViewType } from '../../enums/view-type.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterOutlet, FooterComponent, ProjectsComponent, ProjectDetailComponent, FoldersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public viewType: ViewType;
  public inProjects: boolean;

  public readonly PROJECTS: ViewType = ViewType.PROJECTS;
  public readonly PROJECT_DETAIL: ViewType = ViewType.PROJECT_DETAIL;
  public readonly FOLDERS: ViewType = ViewType.FOLDERS;

  constructor() {
    this.viewType = this.PROJECTS;
    this.inProjects = true;
  }
}
