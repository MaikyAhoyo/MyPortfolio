import { Component, HostListener, Renderer2, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { ModalProjectComponent } from '../../components/modal-project/modal-project.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardComponent, ModalProjectComponent],
  templateUrl: './projects.component.html',
  styles: ``,
  standalone: true,
})
export class ProjectsComponent {
  selectedProject: any = null;

  constructor(private renderer: Renderer2) {}

  handleSelectedProject(project: any) {
    this.openProject(project);
  }

  openProject(project: any): void {
    this.selectedProject = project;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeProject(): void {
    this.selectedProject = null;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.selectedProject) {
      this.closeProject();
    }
  }
}
