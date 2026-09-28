import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private auth = inject(AuthService);
  private router = inject(Router);
  user$ = this.auth.user$;

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/']);
  }
}
