import { Routes } from '@angular/router';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

export const routes: Routes = [
    { path: 'ajout-produit', component: AjoutProduitComponent },
    { path: 'liste-produit', component: ListeProduitComponent },
    
];
