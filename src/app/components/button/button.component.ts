import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  standalone: true,
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() function: 'button' | 'submit' | 'redirect' = 'button';
  @Input() text: string = 'Click Me';
  @Input() icon: string = '';
  @Input() link?: string = '';
  @Input() disabled: boolean = false;

  getClasses(): string {
    if (this.color === 'primary') {
      return 'px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white';
    } else if (this.color === 'secondary') {
      return 'px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900';
    }
    return '';
  }
}
