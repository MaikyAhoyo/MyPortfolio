import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsCardComponent } from '../../components/skills-card/skills-card.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillsCardComponent],
  templateUrl: './skills.component.html',
  styles: ``,
  standalone: true,
})
export class SkillsComponent {}
