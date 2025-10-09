import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './views/hero/hero.component';
import { AboutComponent } from './views/about/about.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContactComponent } from './views/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  isMobileMenuOpen = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initializeAnimations();
  }

  initializeAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType =
            element.getAttribute('data-animation') || 'fade-in-up';
          const delay = element.getAttribute('data-delay') || '0';

          this.renderer.setStyle(element, 'animation-delay', `${delay}ms`);
          this.renderer.addClass(element, `animate-${animationType}`);
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    document
      .querySelectorAll('[data-animation]')
      .forEach((el) => observer.observe(el));

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      if (!el.hasAttribute('data-animation')) {
        observer.observe(el);
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
