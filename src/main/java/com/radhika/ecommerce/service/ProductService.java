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

    // 🔹 Add Product
    public Product addProduct(Product product) {
        return repo.save(product);
    }

    // 🔹 Get All Products
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // 🔹 Get Product by ID
    public Product getProductById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }
}