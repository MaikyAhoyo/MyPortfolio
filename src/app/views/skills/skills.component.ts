import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: ``,
  standalone: true,
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'TailwindCSS', level: 88 },
    { name: 'RxJS', level: 80 },
  ];

  backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'SQL', level: 65 },
    { name: 'Firebase', level: 85 },
  ];

  tools = [
    'Git',
    'Docker',
    'Figma',
    'VS Code',
    'Webpack',
    'Jest',
    'Postman',
    'AWS',
  ];
}
