import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     AjoutProduitComponent,
    ListeProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Produit_Project';
}
