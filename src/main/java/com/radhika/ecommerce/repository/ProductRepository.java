package com.radhika.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.radhika.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}