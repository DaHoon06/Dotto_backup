package com.dotto.app.config.token;

import com.dotto.app.handler.JwtHandler;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class TokenConfig {

    private final JwtHandler jwtHandler;


    @Bean
    public TokenHelper accessTokenHelper(@Value("${jwt.key.access}")String key, @Value("${jwt.max-age.access}")Long maxAgeSeconds){
        return new TokenHelper(jwtHandler, key, maxAgeSeconds);
    }

    @Bean
    public TokenHelper refreshTokenHelper(@Value("${jwt.key.refresh}")String key, @Value("${jwt.max-age.refresh}")Long maxAgeSeconds){
        return new TokenHelper(jwtHandler, key, maxAgeSeconds);
    }

}
