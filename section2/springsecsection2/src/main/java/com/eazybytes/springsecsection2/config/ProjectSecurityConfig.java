package com.eazybytes.springsecsection2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class ProjectSecurityConfig  {

	@Bean
	SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {

		/**
		 * Default configurations which will secure all the requests
		 */
		/*http.authorizeRequests().anyRequest().authenticated();
			http.formLogin();
			http.httpBasic();*/

		/**
		 * Custom configurations as per our requirement
		 */
		http.authorizeRequests()
				.antMatchers("/myAccount","/myBalance","/myLoans","/myCards").authenticated()
				.antMatchers("/notices","/contact").permitAll()
				.and().httpBasic()
				.and().formLogin();

		/**
		 * Configuration to deny all the requests
		 */
		/*http.authorizeHttpRequests( (auth)->auth
				.anyRequest().denyAll())
				.httpBasic(Customizer.withDefaults());
		return http.build();*/

		/**
		 * Configuration to permit all the requests
		 */
		/*http.authorizeHttpRequests( (auth)->auth
						.anyRequest().permitAll())
				.httpBasic(Customizer.withDefaults());
		return http.build();*/

		return http.build();
	}

}
