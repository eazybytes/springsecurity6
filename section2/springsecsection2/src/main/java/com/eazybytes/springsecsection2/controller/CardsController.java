package com.eazybytes.springsecsection2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CardsController {
	
	@GetMapping("/myCards")
	public String getCardDetails(String input) {
		return "Here are the card details from the DB";
	}

}
