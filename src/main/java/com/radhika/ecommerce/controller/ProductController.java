package com.radhika.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.radhika.ecommerce.entity.Product;
import com.radhika.ecommerce.service.ProductService;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")

public class ProductController {

    @Autowired
    private ProductService service;

    // ➕ Add Product
    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product) {
        return service.addProduct(product);
    }

    // 📋 Get All Products
    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    // 🔍 Get by ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return service.getProductById(id);
    }

    // 🔥 Search / Filter API
    @GetMapping("/search")
    public List<Product> searchProducts(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Double min,
            @RequestParam(required = false) Double max) {

        return service.searchProducts(name, min, max);
    }
}