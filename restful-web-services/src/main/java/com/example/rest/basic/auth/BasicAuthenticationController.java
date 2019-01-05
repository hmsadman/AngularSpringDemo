package com.example.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean() {
//		throw new RuntimeException("Some Error here");
		return new AuthenticationBean("Authenticated!");
		
	}
	

}
