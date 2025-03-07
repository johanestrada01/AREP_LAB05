package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.Model.Property;
import com.example.demo.Repository.PropertyRepository;

@Service
public class PropertyService {

    PropertyRepository propertyRepository;

    public PropertyService(PropertyRepository propertyRepository){
        this.propertyRepository = propertyRepository;
    }

    public List<Property> getAllProperties(){
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long id) throws Exception{
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isPresent()){
            return property.get();
        }
        throw new Exception();
    }
    
    public void deleteProperty(Long id) throws Exception{
        Property property = getPropertyById(id);
        propertyRepository.delete(property);
    }

    public void updateProperty(Property property){
        propertyRepository.save(property);
    }

    public void addProperty(Property property){
        propertyRepository.save(property);
    }
}
