import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  user: any = null;
  userData: any = null;

  ngOnInit() {
    this.auth.user$.subscribe(async (user) => {
      if (!user) {
        this.router.navigate(['/login']);
        return;
      }
      this.user = user;
      this.userData = await this.auth.getUserData(user.uid);
    });
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/']);
  }
}
