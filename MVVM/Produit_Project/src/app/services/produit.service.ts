import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Produit {
  id: number;
  libelle: string;
  famille: string;
  matieres: { nom: string; pourcentage: number }[];
}

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) {}

  // Récupérer tous les produits
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  // Ajouter un produit
  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, produit);
  } 

  // Mettre à jour un produit
  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${id}`, produit);
  }


  deleteProduit(id: number): Observable<Produit> {
    return this.http.delete<Produit>(`${this.apiUrl}/${id}`);
  }
}
