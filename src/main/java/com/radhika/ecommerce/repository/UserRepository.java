package com.radhika.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.radhika.ecommerce.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}