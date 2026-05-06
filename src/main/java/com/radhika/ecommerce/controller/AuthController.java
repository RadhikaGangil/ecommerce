package com.radhika.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.radhika.ecommerce.entity.User;
import com.radhika.ecommerce.repository.UserRepository;
import com.radhika.ecommerce.service.UserService;
import com.radhika.ecommerce.config.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService service;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    // 🔹 Register
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return service.register(user);
    }

    // 🔹 Login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        User existingUser = userRepository.findByEmail(user.getEmail());

        // ❌ email not found
        if (existingUser == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        // ❌ wrong password
        if (!existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid password");
        }

        // ✅ SUCCESS
        return ResponseEntity.ok("Login Success");

    }

    // 🔥 GET CURRENT USER
    @GetMapping("/me")
    public User getCurrentUser() {

        // 🔥 simple fix (no token)
        return userRepository.findAll().get(0);
    }
}