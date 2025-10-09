import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styles: ``,
  standalone: true,
})
export class CardComponent {
  @Input() project!: {
    title: string;
    description: string;
    tech: string[];
    images: string[];
    features: string[];
    link: string;
    github: string;
  };

  @Output() selectedProject = new EventEmitter<typeof this.project>();

  onSelect() {
    this.selectedProject.emit(this.project);
  }
}
