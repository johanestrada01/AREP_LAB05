package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Property;

public interface PropertyRepository extends JpaRepository<Property, Long>{
    
}
