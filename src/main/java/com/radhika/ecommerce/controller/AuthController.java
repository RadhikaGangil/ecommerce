package com.radhika.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
    public String login(@RequestBody User user) {
        try {
            User validUser = service.login(user);
            return jwtUtil.generateToken(validUser.getEmail());
        } catch (Exception e) {
            return e.getMessage(); // 🔥 important
        }
    }

    // 🔥 GET CURRENT USER
    @GetMapping("/me")
    public User getCurrentUser() {

        // 🔥 simple fix (no token)
        return userRepository.findAll().get(0);
    }
}