import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styles: ``,
  standalone: true,
})
export class ContactComponent {
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
  }
}
