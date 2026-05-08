package com.radhika.ecommerce.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET_KEY = "fashionera_secret_key";

    // ✅ GENERATE TOKEN
    public String generateToken(String email) {

        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(System.currentTimeMillis() + 86400000))

                .signWith(
                        SignatureAlgorithm.HS256,
                        SECRET_KEY)

                .compact();
    }

    // ✅ EXTRACT EMAIL
    public String extractEmail(String token) {

        Claims claims = Jwts.parser()

                .setSigningKey(SECRET_KEY)

                .parseClaimsJws(token) 

                .getBody();

        return claims.getSubject();
    }
}