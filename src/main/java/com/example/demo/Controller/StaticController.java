package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class StaticController {

    @GetMapping("/add")
    public String getAdd() {
        return "add";
    }
    
    @GetMapping("/")
    public String getIndex() {
        return "index";
    }
    
    @GetMapping("/get")
    public String getConsult() {return "get";}

    @GetMapping("/update/{id}")
    public String getPropertie(@PathVariable String id, Model model){
        System.out.println(id + " id static ");
        model.addAttribute("id", id);
        return "update";
    }
}
