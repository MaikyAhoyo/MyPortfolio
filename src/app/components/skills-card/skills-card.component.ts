import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-card',
  imports: [CommonModule],
  templateUrl: './skills-card.component.html',
  styles: ``,
  standalone: true,
})
export class SkillsCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() color: 'blue' | 'cyan' | 'green' = 'blue';
  @Input() description!: string;
  @Input() items!: string[];
}
