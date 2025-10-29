package com.eazybytes.springsecuritybasic.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @PostMapping("/welcome")
    public String sayWelcome(){
        return "Welcome to Spring Application with Security";
    }

}
