package com.eazybytes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {
	
	@GetMapping("/contact")
	public String saveContactInquiryDetails(String input) {
		return "Inquiry details are saved to the DB";
	}

}
