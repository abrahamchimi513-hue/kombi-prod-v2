import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  categories = ['Tout', 'Photographie', 'Infographie', 'Sérigraphie', 'Personnalisation'];
  selectedCategory = 'Tout';

    items = [
    {
      image: '/portfolio/photo2.jpeg',
      title: 'Agrandissement Plexiglass',
      category: 'Photographie'
    },
    {
      image: '/portfolio/photo9.jpeg',
      title: 'Portrait sur Bois',
      category: 'Photographie'
    },
    {
      image: '/portfolio/photo3.jpeg',
      title: 'Logo Entreprise',
      category: 'Infographie'
    },
    {
      image: '/portfolio/photo4.jpeg',
      title: 'Carte de visite',
      category: 'Infographie'
    },
    {
      image: '/portfolio/photo5.jpeg',
      title: 'T-shirts d\'équipe',
      category: 'Sérigraphie'
    },
    {
      image: '/portfolio/photo6.jpeg',
      title: 'Casquettes personnalisées',
      category: 'Sérigraphie'
    },
    {
      image: '/portfolio/photo7.jpeg',
      title: 'Mug personnalisé',
      category: 'Personnalisation'
    },
    {
      image: '/portfolio/photo8.jpeg',
      title: 'Bijou gravé',
      category: 'Personnalisation'
    },
    {
      image: '/portfolio/photo1.jpeg',
      title: 'Banderole événement',
      category: 'Infographie'
    }
  ];

  get filteredItems() {
    if (this.selectedCategory === 'Tout') return this.items;
    return this.items.filter(item => item.category === this.selectedCategory);
  }

  filterCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
