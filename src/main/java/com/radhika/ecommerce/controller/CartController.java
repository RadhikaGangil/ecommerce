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

    // 🔥 ADD TO CART (no duplicate, increase quantity)
    @PostMapping("/add")
    public String addToCart(@RequestBody Cart cart) {

        List<Cart> items = cartRepo.findAll();

        for (Cart c : items) {
            if (c.getProductId().equals(cart.getProductId())) {
                c.setQuantity(c.getQuantity() + 1);
                cartRepo.save(c);
                return "Quantity Updated";
            }
        }

        cart.setQuantity(1);
        cartRepo.save(cart);
        return "Added to Cart";
    }

    // 🔥 GET CART WITH PRODUCT DETAILS
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

    // 🔥 UPDATE QUANTITY
    @PutMapping("/update/{id}")
    public String updateCart(@PathVariable Long id, @RequestParam int quantity) {

        Cart cart = cartRepo.findById(id).orElse(null);

        if (cart != null) {
            cart.setQuantity(quantity);
            cartRepo.save(cart);
            return "Updated";
        }

        return "Not Found";
    }

    // 🔥 DELETE ITEM
    @DeleteMapping("/delete/{id}")
    public String deleteItem(@PathVariable Long id) {
        cartRepo.deleteById(id);
        return "Deleted";
    }
}