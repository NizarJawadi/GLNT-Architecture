import { Component } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-produit',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './liste-produit.component.html',
  styleUrl: './liste-produit.component.css'
})
export class ListeProduitComponent {
  produits: any[] = []; // Liste des produits

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void {
    this.produitService.getProduits().subscribe({
      next: (data) => (this.produits = data),
      error: (err) => console.error('Erreur lors de la récupération des produits:', err),
    });
  }

  deleteMatiere(produitId: number, matiereIndex: number): void {
    const produit = this.produits.find((p) => p.id === produitId);
    if (produit) {
      produit.matieres.splice(matiereIndex, 1); // Supprime la matière localement
      this.produitService.addProduit(produit).subscribe(() => {
        alert('Matière supprimée avec succès.');
      });
    }
  }

  updateMatiere(produitId: number, matiereIndex: number): void {
    const produit = this.produits.find((p) => p.id === produitId);
    if (produit) {
      const updatedMatiere = produit.matieres[matiereIndex];
      // Simulez un formulaire ou des données modifiées ici si nécessaire
      this.produitService.addProduit(produit).subscribe(() => {
        alert('Matière mise à jour avec succès.');
      });
    }
  }

  updateProduit(produitId: number, produit: any): void {
    // Vous pouvez implémenter une logique pour mettre à jour le produit
    // Par exemple, ouvrir un formulaire de modification ou modifier les données en local
    alert(`Produit avec l'ID ${produitId} doit être mis à jour.`);
    // Simuler la mise à jour en envoyant les nouvelles données
    this.produitService.addProduit(produit).subscribe(() => {
      alert('Produit mis à jour avec succès.');
    });
  }


   // Suppression d'un produit
   deleteProduit(produitId: number): void {
    this.produitService.deleteProduit(produitId).subscribe(() => {
      this.produits = this.produits.filter((p) => p.id !== produitId);
      alert('Produit supprimé avec succès.');
    });
  }
}
