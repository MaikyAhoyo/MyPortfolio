import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal-project',
  imports: [CommonModule, ButtonComponent],
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
