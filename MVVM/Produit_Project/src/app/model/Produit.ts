import { Matiere } from "./Matiere";

export interface Produit {
    id?: number;
    libelle: string;
    famille: string;
    matieres: Matiere[];
  }