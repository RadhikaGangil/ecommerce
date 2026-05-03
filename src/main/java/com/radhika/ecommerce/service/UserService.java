package com.radhika.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.radhika.ecommerce.entity.User;
import com.radhika.ecommerce.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // 🔹 Register
    public String register(User user) {

        user.setPassword(encoder.encode(user.getPassword()));

        // 🔥 Default role
        user.setRole("USER");

        repo.save(user);

        return "User Registered";
    }

    // 🔹 Login
    public User login(User user) {

        User existing = repo.findByEmail(user.getEmail());

        if (existing == null) {
            throw new RuntimeException("User not found");
        }

        if (!encoder.matches(user.getPassword(), existing.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return existing;
    }
}