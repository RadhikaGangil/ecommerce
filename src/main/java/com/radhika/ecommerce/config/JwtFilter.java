// package com.radhika.ecommerce.config;

// import jakarta.servlet.*;
// import jakarta.servlet.http.*;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import com.radhika.ecommerce.entity.User;
// import com.radhika.ecommerce.repository.UserRepository;

// import java.io.IOException;
// import java.util.List;

// @Component
// public class JwtFilter extends OncePerRequestFilter {

//     @Autowired
//     private JwtUtil jwtUtil;

//     @Autowired
//     private UserRepository repo;

//     @Override
//     protected void doFilterInternal(HttpServletRequest request,
//             HttpServletResponse response,
//             FilterChain filterChain)
//             throws ServletException, IOException {

//         String header = request.getHeader("Authorization");

//         if (header != null && header.startsWith("Bearer ")) {

//             String token = header.substring(7);

//             String email = jwtUtil.extractEmail(token);

//             User user = repo.findByEmail(email);

//             if (user != null) {

//                 UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
//                         email,
//                         null,
//                         List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole())));

//                 SecurityContextHolder.getContext().setAuthentication(auth);
//             }
//         }

//         filterChain.doFilter(request, response);
//     }
// }




package com.radhika.ecommerce.config;

import jakarta.servlet.*;
import jakarta.servlet.http.*;

import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        // 🔥 अभी कुछ check नहीं कर रहे
        filterChain.doFilter(request, response);
    }
}