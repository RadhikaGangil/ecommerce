package com.radhika.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.radhika.ecommerce.config.JwtUtil;
import com.radhika.ecommerce.entity.User;
import com.radhika.ecommerce.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository repo;

    

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String register(User user) {

        // check duplicate email
        if (repo.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        if (user.getEmail() == null || !user.getEmail().contains("@")) {
            throw new RuntimeException("Invalid email");
        }

        if (user.getPassword() == null || user.getPassword().length() < 6) {
            throw new RuntimeException("Password must be at least 6 characters");
        }

        user.setPassword(encoder.encode(user.getPassword()));

        repo.save(user);

        return "User Registered Successfully";
    }

    public String login(User user) {

        User dbUser = repo.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(user.getPassword(), dbUser.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // JWT return
        return jwtUtil.generateToken(user.getEmail());
    }
}