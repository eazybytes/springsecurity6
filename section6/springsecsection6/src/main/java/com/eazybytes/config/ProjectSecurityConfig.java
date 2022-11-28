package com.eazybytes.config;

import com.eazybytes.filter.CsrfCookieFilter;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Collections;


@Configuration
public class ProjectSecurityConfig {

    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        /**
         *  From Spring Security 6, below actions will not happen by default,
         *  1) The Authentication details will not be saved automatically into SecurityContextHolder. To change this behaviour either we need to save
         *      these details explicitly into SecurityContextHolder or we can configure securityContext().requireExplicitSave(false) like shown below.
         *  2) The Session & JSessionID will not be created by default. Inorder to create a session after intial login, we need to configure
         *      sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.ALWAYS)) like shown below.
         */
        http.securityContext().requireExplicitSave(false)
                .and().sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))
                .cors().configurationSource(new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                CorsConfiguration config = new CorsConfiguration();
                config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
                config.setAllowedMethods(Collections.singletonList("*"));
                config.setAllowCredentials(true);
                config.setAllowedHeaders(Collections.singletonList("*"));
                config.setMaxAge(3600L);
                return config;
            }
                    /**
                     *  From Spring Security 6, by default the CSRF Cookie that got generated during intial login will not be shared to UI application.
                     *  The developer has to write logic to read the CSRF token and send it as part of the response. When framework sees the
                     *  CSRF token in the response header, it takes of sending the same as Cookie as well. For the same, I have created
                     *  a filter with the name CsrfCookieFilter and configured the same to run every time after the Spring Security in built filter
                     *  BasicAuthenticationFilter like shown below. More details about Filters, are discussed inside the Section 8 of the course.
                     */
        }).and().csrf().ignoringRequestMatchers("/contact","/register").csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and().addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class)
                .authorizeHttpRequests()
                        .requestMatchers("/myAccount","/myBalance","/myLoans","/myCards", "/user").authenticated()
                        .requestMatchers("/notices","/contact","/register").permitAll()
                .and().formLogin()
                .and().httpBasic();
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
