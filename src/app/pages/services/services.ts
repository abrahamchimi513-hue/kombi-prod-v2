import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      icon: '📸',
      title: 'Photographie & Agrandissements',
      description: 'Donnez une seconde vie à vos souvenirs avec nos agrandissements de haute qualité.',
      items: ['Agrandissement sur Bois', 'Agrandissement sur Vitre', 'Agrandissement sur Plexiglass', 'Bordure Dorée'],
      color: '#1a237e'
    },
    {
      icon: '🎨',
      title: 'Infographie & Impressions',
      description: 'Un design professionnel pour booster votre communication et votre image de marque.',
      items: ['Logos & Identité visuelle', 'Banderoles, Roll-up, Oriflammes', 'Flyers, Dépliants, Affiches', 'Cartes de visite', 'Personnalisation : Tasses, Plats, Stylos'],
      color: '#e53935'
    },
    {
      icon: '👕',
      title: 'Sérigraphie',
      description: 'Des vêtements personnalisés pour votre équipe, vos événements ou votre marque.',
      items: ['Polos', 'T-shirts', 'Casquettes', 'Maillots'],
      color: '#ffc107'
    },
    {
      icon: '💎',
      title: 'Personnalisation de Bijoux',
      description: 'Offrez un cadeau unique et inoubliable avec nos bijoux personnalisés.',
      items: ['Gravure sur bijoux', 'Bijoux avec photos', 'Cadeaux personnalisés'],
      color: '#4caf50'
    }
  ];
}
