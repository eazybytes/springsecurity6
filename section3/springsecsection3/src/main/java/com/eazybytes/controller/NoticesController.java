package com.eazybytes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoticesController {
	
	@GetMapping("/notices")
	public String getNotices(String input) {
		return "Here are the notices details from the DB";
	}

}
