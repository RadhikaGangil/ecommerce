package com.radhika.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.radhika.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // 🔍 Search by name
    List<Product> findByNameContainingIgnoreCase(String name);

    // 💰 Filter by price
    List<Product> findByPriceBetween(double min, double max);

    // 🔥 Combined filter
    List<Product> findByNameContainingIgnoreCaseAndPriceBetween(String name, double min, double max);
}