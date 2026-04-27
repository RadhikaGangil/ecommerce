package com.radhika.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.radhika.ecommerce.entity.User;
import com.radhika.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/auth")

// 🔥 IMPORTANT (React connect ke liye)
@CrossOrigin(origins = "http://localhost:3000")

public class AuthController {

    @Autowired
    private UserService service;

    // ✅ REGISTER API
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return service.register(user);
    }

    // ✅ LOGIN API
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return service.login(user);
    }
}