package com.dotto.app.config.token;


import com.dotto.app.handler.JwtHandler;
import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class TokenHelper {

    private final JwtHandler jwtHandler;
    private final String key;
    private final long maxAgeSeconds;

    private final String SEP = ",";
    private final String MEMBER_ID = "MEMBER_ID";
    private final String ROLE_TYPE = "ROLE_TYPE";


    public String createToken(PrivateClaims privateClaims){
    return  jwtHandler.createToken(
                key,
                Map.of(MEMBER_ID,privateClaims.getMemberId(),ROLE_TYPE, privateClaims.getRoleTypes().stream().collect(Collectors.joining(SEP))),
                maxAgeSeconds
        );
    }

    public Optional<PrivateClaims> parse(String token){

        return jwtHandler.parse(key, token).map(this::convert);

    }

    public PrivateClaims convert(Claims claims){
        return new PrivateClaims(
                claims.get(MEMBER_ID, String.class),
                Arrays.asList(claims.get(ROLE_TYPE, String.class).split(SEP))
        );
    }


@Getter
@AllArgsConstructor
public static class PrivateClaims{
        private String memberId;
        private List<String> roleTypes;
}

}
