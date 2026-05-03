package com.radhika.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.radhika.ecommerce.entity.Product;
import com.radhika.ecommerce.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    // ➕ Add Product
    public Product addProduct(Product product) {
        return repo.save(product);
    }

    // 📋 Get All Products
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // 🔍 Get by ID
    public Product getProductById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    // 🔥 Search / Filter
    public List<Product> searchProducts(String name, Double min, Double max) {

        if (name != null && min != null && max != null) {
            return repo.findByNameContainingIgnoreCaseAndPriceBetween(name, min, max);
        }

        if (name != null) {
            return repo.findByNameContainingIgnoreCase(name);
        }

        if (min != null && max != null) {
            return repo.findByPriceBetween(min, max);
        }

        return repo.findAll();
    }
}