package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Property {

    @Id
    @GeneratedValue
    private Long id;
    private String address;
    private int price;
    private int size;
    private String description;

    public Property(){}

    public Property(Long id, String address, int price, int size, String description){
        this.id = id;
        this.address = address;
        this.price = price;
        this.size = size;
        this.description = description;
    }


    
}
//., address, price, size, description).