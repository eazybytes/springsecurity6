package com.eazybytes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
public class ProjectSecurityConfig {

	@Bean
	SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/myAccount", "/myBalance", "/myLoans", "/myCards").authenticated()
				.antMatchers("/notices", "/contact").permitAll()
				.and().httpBasic()
				.and().formLogin();
		return http.build();
	}

	/*@Bean
	public InMemoryUserDetailsManager userDetailsService() {

		*//*Approach 1 where we use withDefaultPasswordEncoder() method
		while creating the user details*//*

		*//*UserDetails admin = User.withDefaultPasswordEncoder()
				.username("admin")
				.password("12345")
				.authorities("admin")
				.build();
		UserDetails user = User.withDefaultPasswordEncoder()
				.username("user")
				.password("12345")
				.authorities("read")
				.build();
		return new InMemoryUserDetailsManager(admin, user);*//*

		*//*InMemoryUserDetailsManager inMemoryUserDetailsManager = new InMemoryUserDetailsManager();
		UserDetails admin = User.withUsername("admin").password("12345").authorities("admin").build();
		UserDetails user = User.withUsername("user").password("12345").authorities("read").build();
		inMemoryUserDetailsManager.createUser(admin);
		inMemoryUserDetailsManager.createUser(user);
		return inMemoryUserDetailsManager;*//*
	}*/

	/**
	 * NoOpPasswordEncoder is not recommended for production usage.
	 * Use only for non-prod.
	 *
	 * @return PasswordEncoder
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}

	/*@Bean
	public UserDetailsService userDetailsService(DataSource dataSource) {
		return new JdbcUserDetailsManager(dataSource);
	}*/

}
