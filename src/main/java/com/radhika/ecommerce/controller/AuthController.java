// package com.radhika.ecommerce.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.radhika.ecommerce.entity.User;
// import com.radhika.ecommerce.repository.UserRepository;
// import com.radhika.ecommerce.service.UserService;
// import com.radhika.ecommerce.config.JwtUtil;

// import jakarta.servlet.http.HttpServletRequest;

// @RestController
// @RequestMapping("/api/auth")
// @CrossOrigin(origins = "http://localhost:3000")
// public class AuthController {

//     @Autowired
//     private UserRepository userRepository;

//     // ✅ REGISTER
//     @PostMapping("/register")
//     public ResponseEntity<?> register(@RequestBody User user) {

//         User existingUser = userRepository.findByEmail(user.getEmail());

//         if (existingUser != null) {
//             return ResponseEntity.badRequest().body("Email already exists");
//         }

//         // ✅ Default USER role
//         if (user.getRole() == null || user.getRole().isEmpty()) {
//             user.setRole("USER");
//         }

//         userRepository.save(user);

//         return ResponseEntity.ok("Registered Successfully");
//     }

//     // ✅ LOGIN
//     @PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody User user) {

//         User existingUser = userRepository.findByEmail(user.getEmail());

//         // ❌ USER NOT FOUND
//         if (existingUser == null) {
//             return ResponseEntity.badRequest().body("User not found");
//         }

//         // ❌ WRONG PASSWORD
//         if (!existingUser.getPassword().equals(user.getPassword())) {
//             return ResponseEntity.badRequest().body("Invalid password");
//         }

//         // ✅ RETURN ROLE
//         return ResponseEntity.ok(existingUser.getRole());
//     }
// }

package com.radhika.ecommerce.controller;

import com.radhika.ecommerce.config.JwtUtil;
import com.radhika.ecommerce.entity.User;
import com.radhika.ecommerce.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ REGISTER API
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        // 🔥 CHECK EMAIL
        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        // ✅ SAVE USER
        userRepository.save(user);

        return ResponseEntity.ok("Registered Successfully");
    }

    // ✅ LOGIN API
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        // 🔥 FIND USER
        User existingUser = userRepository.findByEmail(user.getEmail());

        // ❌ USER NOT FOUND
        if (existingUser == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        // ❌ WRONG PASSWORD
        if (!existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid password");
        }

        // ✅ GENERATE JWT TOKEN
        String token = jwtUtil.generateToken(existingUser.getEmail());

        // ✅ RESPONSE
        Map<String, Object> response = new HashMap<>();

        response.put("token", token);
        response.put("role", existingUser.getRole());
        response.put("email", existingUser.getEmail());

        // ✅ RETURN TOKEN + ROLE
        return ResponseEntity.ok(response);
    }
}