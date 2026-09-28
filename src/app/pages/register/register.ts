import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  confirmPassword = '';
  nom = '';
  errorMessage = '';
  loading = false;

  async onSubmit() {
    this.errorMessage = '';

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 6 caractères.';
      return;
    }

    this.loading = true;
    try {
      await this.auth.register(this.email, this.password, this.nom);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'Cet email est déjà utilisé.';
      } else if (error.code === 'auth/invalid-email') {
        this.errorMessage = 'Email invalide.';
      } else {
        this.errorMessage = 'Erreur lors de l\'inscription. Réessayez.';
      }
      this.loading = false;
    }
  }
}
