import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    // Pour l'instant, on affiche juste un message de succès
    // Plus tard, on pourra envoyer les données par email
    this.submitted = true;
    this.formData = { nom: '', email: '', telephone: '', sujet: '', message: '' };

    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }
}
