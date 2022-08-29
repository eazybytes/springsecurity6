package com.eazybytes.springsecOAUTH2GitHub.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecOAUTH2GitHubConfig {

    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest().authenticated().and().oauth2Login();
        return http.build();
    }

    /*private ClientRegistration clientRegistration() {
		return CommonOAuth2Provider.GITHUB.getBuilder("github").clientId("ed7ee79c2df267957dc2")
	           .clientSecret("e881a2e189ca66d4477dc678dad528bd1603b169").build();
	 }*/


    /*private ClientRegistration clientRegistration() {
        ClientRegistration cr =
                ClientRegistration.withRegistrationId("github").clientId(
                                "ed7ee79c2df267957dc2").clientSecret("e881a2e189ca66d4477dc678dad528bd1603b169").scope(new String[]
                                {"read:user"})
                        .authorizationUri("https://github.com/login/oauth/authorize")
                        .tokenUri("https://github.com/login/oauth/access_token").userInfoUri(
                                "https://api.github.com/user")
                        .userNameAttributeName("id").clientName("GitHub")
                        .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                        .redirectUri("{baseUrl}/{action}/oauth2/code/{registrationId}").build();
        return cr;
    }*/


    /*@Bean
    public ClientRegistrationRepository clientRepository() {
        ClientRegistration clientReg = clientRegistration();
        return new InMemoryClientRegistrationRepository(clientReg);
    }*/

}
