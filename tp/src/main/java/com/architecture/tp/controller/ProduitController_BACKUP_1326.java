package com.architecture.tp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.architecture.tp.model.Produit;
import com.architecture.tp.service.ProduitService;


@Controller
@RequestMapping("/produits")
public class ProduitController {
<<<<<<< HEAD
 @Autowired
 private ProduitService produitService;
 @GetMapping
 public String getAllProduits(Model model) {
 model.addAttribute("produits", produitService.findAll());
 return "produits"; // Nom de la vue
 }
 
 @PostMapping("/add")
 public String addProduit(Produit produit) {
 produitService.save(produit);
 return "redirect:/produits"; // Rediriger vers la liste des produits
 }



=======
    @Autowired
    private ProduitService produitService;

    @GetMapping
    public String getAllProduits(Model model) {
        model.addAttribute("produits", produitService.findAll());
        return "produits"; // Nom de la vue
    }

    @PostMapping("/add")
    public String addProduit(Produit produit) {
        produitService.save(produit);
        return "redirect:/produits"; // Rediriger vers la liste des produits
    }

    // Affiche le formulaire de modification pour un produit spécifique
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Produit produit = produitService.findById(id);
        if (produit != null) {
            model.addAttribute("produit", produit);
            return "edit"; // Renvoie vers le template edit.html
        } else {
            return "redirect:/produits"; // Redirige vers la liste des produits si l'ID est invalide
        }
    }

    // Enregistre les modifications du produit
    @PostMapping("/update/{id}")
    public String updateProduit(@PathVariable Long id, Produit produitDetails) {
        Produit produit = produitService.findById(id);
        if (produit != null) {
            produit.setLibelle(produitDetails.getLibelle());
            produit.setPrix(produitDetails.getPrix());
            produit.setQteStock(produitDetails.getQteStock());
            produitService.save(produit); // Enregistre les modifications
        }
        return "redirect:/produits"; // Redirige vers la liste des produits après modification
    }
>>>>>>> 5821ab772f6613ca3dcfaf700d5613af4d638d12

}