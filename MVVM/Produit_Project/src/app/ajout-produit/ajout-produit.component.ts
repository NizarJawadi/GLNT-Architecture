import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-produit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss'],
})
export class AjoutProduitComponent {
  produitForm: FormGroup;

  constructor(private fb: FormBuilder,
               private produitService: ProduitService ,
                private router: Router) {
    this.produitForm = this.fb.group({
      libelle: [''],
      famille: [''],
      matieres: this.fb.array([]),
    });
  }

  redirectToListeProduit(): void {
    this.router.navigate(['liste-produit']);
  }

  get matieres(): FormArray {
    return this.produitForm.get('matieres') as FormArray;
  }

  addMatiere(): void {
    this.matieres.push(
      this.fb.group({
        nom: [''],
        pourcentage: [0],
      })
    );
  }

  removeMatiere(index: number): void {
    this.matieres.removeAt(index);
  }

  onSubmit(): void {
    const produit = this.produitForm.value;
    this.produitService.addProduit(produit).subscribe({
      next: (response: any) => {
        console.log('Produit enregistré :', response);
        alert('Produit ajouté avec succès !');
      },
      error: (err: any) => {
        console.error('Erreur lors de l\'ajout du produit :', err);
      },
    });
  }
}