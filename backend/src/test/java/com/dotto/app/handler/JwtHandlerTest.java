package com.dotto.app.handler;

import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.Test;

import java.util.Base64;
import java.util.Map;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class JwtHandlerTest {
    JwtHandler jwtHandler = new JwtHandler();

    @Test
    void createTokenTest() {
        //given, when
        String key = "myKey";
        String token = createToken(key, Map.of(),10L);

        //then
        assertThat(token).contains("Bearer ");

    }

    @Test
    void parseTest() {
        //given
        String key = "key";
        String value = "value";
        String token = createToken(key,Map.of(key,value),50L);

        //when
        Claims claims = jwtHandler.parse(key,token).orElseThrow(RuntimeException::new);

        //then
        assertThat(claims.get(key)).isEqualTo(value);

    }

    @Test
    void parseByInvalidTest(){
        //given
        String encodedKey = Base64.getEncoder().encodeToString("myKey".getBytes());
        String token = createToken(encodedKey,Map.of(),60L );

        //when
        Optional<Claims> claims = jwtHandler.parse("invalidKey",token);

        //then
        assertThat(claims).isEmpty();

    }

    @Test
    void parseByExpireTest(){
        //given
        String encodedKey = Base64.getEncoder().encodeToString("myKey".getBytes());
        String token = createToken(encodedKey,Map.of(),0L);

        //when
        Optional<Claims> claims = jwtHandler.parse("invalidKey",token);

        //then
        assertThat(claims).isEmpty();
    }

    private String createToken(String key, Map<String, Object>claims, long maxAgeSeconds){
        return jwtHandler.createToken(key, claims, maxAgeSeconds);
    }
}