package com.dotto.app.dto.sign.request;


import com.dotto.app.dto.sign.request.OAuthSignInRequest;
import com.dotto.app.dto.sign.request.OAuthSignUpRequest;
import lombok.Getter;
import org.apache.tomcat.util.codec.binary.Base64;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;


@Getter
public class OAuthSignUpDTO {

    private final String id;
    private final String loginType;
    private final OAuthSignUpRequest req;
    private final String password = "비밀친구";

    public OAuthSignUpDTO(String idToken, String loginType, OAuthSignUpRequest req){
        this.id = extractSubFromGoogleIdToken(idToken) + loginType;
        this.loginType = loginType;
        this.req = req;

    }

    // Json -> Map 담아서 찾도록 변경
    public String extractSubFromGoogleIdToken(String idToken){
        String[] token = idToken.split("\\.");
        String payload = new String(Base64.decodeBase64(token[1]));
        String[] sub = payload.split(",");
        return sub[3].substring(7,28);
    }


}
