package com.architecture.tp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.architecture.tp.model.Produit;

public interface ProduitRepository extends JpaRepository<Produit,Long>{



}