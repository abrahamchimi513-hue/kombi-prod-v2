import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './devis.html',
  styleUrl: './devis.css'
})
export class Devis {
  private http = inject(HttpClient);

  formData = {
    service: '',
    description: '',
    quantite: '',
    nom: '',
    telephone: '',
    email: ''
  };

  submitting = false;
  success = false;
  errorMessage = '';

  async onSubmit() {
    this.submitting = true;
    this.errorMessage = '';

    // Simulation d'envoi (nous brancherons Formspree plus tard)
    setTimeout(() => {
      console.log('Données envoyées :', this.formData);
      this.success = true;
      this.submitting = false;
      this.formData = {
        service: '',
        description: '',
        quantite: '',
        nom: '',
        telephone: '',
        email: ''
      };
    }, 1500);
  }

  resetForm() {
    this.success = false;
  }
}
