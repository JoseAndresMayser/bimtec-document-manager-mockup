import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterOutlet, FooterComponent, ProjectsComponent, ProjectDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public inProjects: boolean;

  constructor() {
    this.inProjects = true;
  }
}
