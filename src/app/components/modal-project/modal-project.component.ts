import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-project',
  imports: [CommonModule],
  templateUrl: './modal-project.component.html',
  styles: ``,
  standalone: true,
})
export class ModalProjectComponent {
  @Input() selectedProject: any;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
