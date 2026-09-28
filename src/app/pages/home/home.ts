import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  stats = [
    { value: '+500', label: 'Clients satisfaits' },
    { value: '+1000', label: 'Projets réalisés' },
    { value: '5', label: 'Ans d\'expérience' },
    { value: '24h', label: 'Délai de réponse' }
  ];
}
