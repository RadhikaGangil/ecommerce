package com.radhika.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.radhika.ecommerce.entity.Cart;
import com.radhika.ecommerce.entity.Product;
import com.radhika.ecommerce.repository.CartRepository;
import com.radhika.ecommerce.repository.ProductRepository;

import java.util.*;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartRepository cartRepo;

    @Autowired
    private ProductRepository productRepo;

    // 🔥 ADD TO CART
    @PostMapping("/add")
    public String addToCart(@RequestBody Cart cart) {
        cartRepo.save(cart);
        return "Added to Cart";
    }

    // 🔥 GET ALL CART ITEMS (WITH PRODUCT DETAILS)
    @GetMapping("/all")
    public List<Map<String, Object>> getCart() {

        List<Cart> cartItems = cartRepo.findAll();
        List<Map<String, Object>> result = new ArrayList<>();

        for (Cart c : cartItems) {

            Product p = productRepo.findById(c.getProductId()).orElse(null);

            if (p != null) {
                Map<String, Object> map = new HashMap<>();

                map.put("id", c.getId());
                map.put("name", p.getName());
                map.put("price", p.getPrice());
                map.put("quantity", c.getQuantity());

                result.add(map);
            }
        }

        return result;
    }

    // 🔥 DELETE ITEM FROM CART
    @DeleteMapping("/delete/{id}")
    public String deleteItem(@PathVariable Long id) {
        cartRepo.deleteById(id);
        return "Item Removed";
    }
}